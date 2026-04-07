// KS-33 MX Style Hotswap Socket (merged footprint)
// Supports both standard MX hotswap socket and KS-33 socket positions
//
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add 1U keycap box around the footprint
//    include_stabilizer_holes: default is true
//      if true, will include the switch stabilizer pin holes

module.exports = {
  params: {
    designator: 'S',
    reverse: false,
    keycaps: false,
    include_stabilizer_holes: true,
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    const standard = `
      (module KS33-MX-Hotswap (layer F.Cu) (tedit 5DD4F656)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${'' /* corner marks */}
      (fp_line (start -7 -7) (end -5 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 -5) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -5 7) (end -7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 5 -7) (end 7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 5) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 7) (end 5 7) (layer Dwgs.User) (width 0.15))
    
      ${'' /* center hole */}
      (pad "" np_thru_hole circle (at 0 0) (size 5.1 5.1) (drill 5.1) (layers *.Cu *.Mask))

      ${'' /* stabilizer holes */}
      ${p.include_stabilizer_holes ? `
      (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      ` : ''}
      `;

    const keycap = `
      ${'' /* 1U keycap marks (19.05mm = 9.525mm from center) */}
      (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.525 -9.525) (end 9.525 9.525) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.525 9.525) (end -9.525 9.525) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.525 9.525) (end -9.525 -9.525) (layer Dwgs.User) (width 0.15))
      `;

    function pins(def_neg, def_pos, def_side) {
      return `
        ${'' /* Socket mounting holes - supports both MX hotswap and KS-33 positions */}
        ${'' /* MX hotswap socket hole positions */}
        (pad "" np_thru_hole circle (at ${def_neg}3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        ${'' /* KS-33 socket hole position */}
        (pad "" np_thru_hole circle (at ${def_neg}2.6 -5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* Through-hole pads for switch pins - merged positions for both sockets */}
        (pad 1 np_thru_hole circle (at ${def_pos}2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad 1 np_thru_hole circle (at ${def_pos}4.4 -4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* SMD pads on back for hotswap socket contacts */}
        ${'' /* Pin 1 - MX hotswap position */}
        (pad 1 smd roundrect (at ${def_pos}5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) (roundrect_rratio 0.08) ${p.from})
        ${'' /* Pin 1 - KS-33 position */}
        (pad 1 smd roundrect (at ${def_pos}7.6375 -4.7 ${p.r}) (size 2.55 2.55) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) (roundrect_rratio 0.08) ${p.from})
        
        ${'' /* Pin 2 - MX hotswap position */}
        (pad 2 smd roundrect (at ${def_neg}7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) (roundrect_rratio 0.08) ${p.to})
        ${'' /* Pin 2 - KS-33 position */}
        (pad 2 smd roundrect (at ${def_neg}5.8375 -5.75 ${p.r}) (size 2.55 2.55) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) (roundrect_rratio 0.08) ${p.to})
        `;
    }

    if (p.reverse) {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `;
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `;
    }
  },
};
