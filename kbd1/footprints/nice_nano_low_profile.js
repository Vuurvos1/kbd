// Nice!Nano V2 Low Profile Socket (Flipped)
// Generated from KiCad footprint: NiceNano_v2_LowProfile_Socket_Flipped.kicad_mod
//
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    RAW: { type: 'net', value: 'RAW' },
    GND: { type: 'net', value: 'GND' },
    RST: { type: 'net', value: 'RST' },
    VCC: { type: 'net', value: 'VCC' },
    P031: { type: 'net', value: 'P031' },
    P029: { type: 'net', value: 'P029' },
    P002: { type: 'net', value: 'P002' },
    P115: { type: 'net', value: 'P115' },
    P113: { type: 'net', value: 'P113' },
    P111: { type: 'net', value: 'P111' },
    P010: { type: 'net', value: 'P010' },
    P009: { type: 'net', value: 'P009' },
    P006: { type: 'net', value: 'P006' },
    P008: { type: 'net', value: 'P008' },
    P017: { type: 'net', value: 'P017' },
    P020: { type: 'net', value: 'P020' },
    P022: { type: 'net', value: 'P022' },
    P024: { type: 'net', value: 'P024' },
    P100: { type: 'net', value: 'P100' },
    P011: { type: 'net', value: 'P011' },
    P104: { type: 'net', value: 'P104' },
    P106: { type: 'net', value: 'P106' },
  },
  body: (p) => {
    const standard = `
      (module nice_nano_low_profile (layer F.Cu) (tedit 6058B206)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -0.5) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.1))))
      (fp_text value nice_nano_low_profile (at 0 1) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* USB port illustration */}
      (fp_line (start -3.683 -18.034) (end 3.683 -18.034) (layer Dwgs.User) (width 0.2))
      (fp_line (start -3.683 -12.954) (end -3.683 -18.034) (layer Dwgs.User) (width 0.2))
      (fp_line (start 3.683 -18.034) (end 3.683 -12.954) (layer Dwgs.User) (width 0.2))
      (fp_line (start 3.683 -12.954) (end -3.683 -12.954) (layer Dwgs.User) (width 0.2))

      ${'' /* component courtyard */}
      (fp_line (start -8.89 -16.51) (end -8.89 16.51) (layer F.Fab) (width 0.381))
      (fp_line (start -8.89 16.51) (end 8.89 16.51) (layer F.Fab) (width 0.381))
      (fp_line (start 8.89 -16.51) (end -8.89 -16.51) (layer F.Fab) (width 0.381))
      (fp_line (start 8.89 16.51) (end 8.89 -16.51) (layer F.Fab) (width 0.381))
      `;

    function pins(def_neg, def_pos) {
      return `
        ${'' /* Front side pin labels - left column (x=-5.08) */}
        (fp_text user RAW (at -5.08 ${def_neg}12.7 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -5.08 ${def_neg}10.16 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -5.08 ${def_neg}7.62 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -5.08 ${def_neg}5.08 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 031 (at -5.08 ${def_neg}2.54 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 029 (at -5.08 ${def_pos}0 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 002 (at -5.08 ${def_pos}2.54 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 115 (at -5.08 ${def_pos}5.08 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 113 (at -5.08 ${def_pos}7.569191 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 111 (at -5.08 ${def_pos}10.16 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 010 (at -5.08 ${def_pos}12.649191 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 009 (at -5.08 ${def_pos}15.24 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${'' /* Front side pin labels - right column (x=5.08) */}
        (fp_text user 006 (at 5.08 ${def_neg}12.64919 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 008 (at 5.08 ${def_neg}10.16 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 5.08 ${def_neg}7.493 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 5.08 ${def_neg}4.953 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 017 (at 5.08 ${def_neg}2.48919 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 020 (at 5.08 ${def_pos}0.05081 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 022 (at 5.08 ${def_pos}2.59081 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 024 (at 5.08 ${def_pos}5.13081 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 100 (at 5.08 ${def_pos}7.67081 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 011 (at 5.08 ${def_pos}10.16 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 104 (at 5.08 ${def_pos}12.75081 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user 106 (at 5.08 ${def_pos}15.24 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${'' /* Back side pin labels - left column (x=-5.08) */}
        (fp_text user RAW (at -5.08 ${def_neg}12.7 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user GND (at -5.08 ${def_neg}10.16 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user RST (at -5.08 ${def_neg}7.62 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user VCC (at -5.08 ${def_neg}5.08 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 031 (at -5.08 ${def_neg}2.54 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 029 (at -5.08 ${def_pos}0 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 002 (at -5.08 ${def_pos}2.54 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 115 (at -5.08 ${def_pos}5.08 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 113 (at -5.08 ${def_pos}7.569191 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 111 (at -5.08 ${def_pos}10.16 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 010 (at -5.08 ${def_pos}12.649191 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 009 (at -5.08 ${def_pos}15.24 ${p.rot}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

        ${'' /* Back side pin labels - right column (x=5.08) */}
        (fp_text user 006 (at 5.08 ${def_neg}12.64919 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 008 (at 5.08 ${def_neg}10.16 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user GND (at 5.08 ${def_neg}7.493 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user GND (at 5.08 ${def_neg}4.953 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 017 (at 5.08 ${def_neg}2.48919 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 020 (at 5.08 ${def_pos}0.05081 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 022 (at 5.08 ${def_pos}2.59081 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 024 (at 5.08 ${def_pos}5.13081 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 100 (at 5.08 ${def_pos}7.67081 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 011 (at 5.08 ${def_pos}10.16 ${p.rot}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 104 (at 5.08 ${def_pos}12.75081 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user 106 (at 5.08 ${def_pos}15.24 ${p.rot}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

        ${'' /* Pads - Left column (pins 1-12, x=-7.62) */}
        (pad 1 thru_hole oval (at -7.62 ${def_neg}12.7) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.RAW.str})
        (pad 2 thru_hole oval (at -7.62 ${def_neg}10.16) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 3 thru_hole oval (at -7.62 ${def_neg}7.62) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.RST.str})
        (pad 4 thru_hole oval (at -7.62 ${def_neg}5.08) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.VCC.str})
        (pad 5 thru_hole oval (at -7.62 ${def_neg}2.54) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P031.str})
        (pad 6 thru_hole oval (at -7.62 ${def_pos}0) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P029.str})
        (pad 7 thru_hole oval (at -7.62 ${def_pos}2.54) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P002.str})
        (pad 8 thru_hole oval (at -7.62 ${def_pos}5.08) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P115.str})
        (pad 9 thru_hole oval (at -7.62 ${def_pos}7.62) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P113.str})
        (pad 10 thru_hole oval (at -7.62 ${def_pos}10.16) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P111.str})
        (pad 11 thru_hole oval (at -7.62 ${def_pos}12.7) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P010.str})
        (pad 12 thru_hole oval (at -7.62 ${def_pos}15.24) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P009.str})

        ${'' /* Pads - Right column (pins 13-24, x=7.62) */}
        (pad 13 thru_hole oval (at 7.62 ${def_neg}12.7) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P006.str})
        (pad 14 thru_hole oval (at 7.62 ${def_neg}10.16) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P008.str})
        (pad 15 thru_hole oval (at 7.62 ${def_neg}7.62) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 16 thru_hole oval (at 7.62 ${def_neg}5.08) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 17 thru_hole oval (at 7.62 ${def_neg}2.54) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P017.str})
        (pad 18 thru_hole oval (at 7.62 ${def_pos}0) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P020.str})
        (pad 19 thru_hole oval (at 7.62 ${def_pos}2.54) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P022.str})
        (pad 20 thru_hole oval (at 7.62 ${def_pos}5.08) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P024.str})
        (pad 21 thru_hole oval (at 7.62 ${def_pos}7.62) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P100.str})
        (pad 22 thru_hole oval (at 7.62 ${def_pos}10.16) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P011.str})
        (pad 23 thru_hole oval (at 7.62 ${def_pos}12.7) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P104.str})
        (pad 24 thru_hole oval (at 7.62 ${def_pos}15.24) (size 2.6 2.2) (drill 1.6) (layers *.Cu *.Mask) ${p.P106.str})
        `;
    }

    if (p.orientation == 'down') {
      return `
          ${standard}
          ${pins('-', '')})
          `;
    } else {
      return `
          ${standard}
          ${pins('', '-')})
          `;
    }
  },
};
