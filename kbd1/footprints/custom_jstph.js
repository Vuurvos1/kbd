module.exports = {
  params: {
    designator: 'JST',
    side: 'F',
    pos: undefined,
    neg: undefined,
  },
  body: (p) => {
    const onBack = p.side === 'B';
    // When on back, swap the net assignments since the component is viewed mirrored
    const pin1Net = onBack ? p.pos : p.neg;
    const pin2Net = onBack ? p.neg : p.pos;
    // Swap pad shapes so rect (pin 1 indicator) stays with positive
    const pin1Shape = onBack ? 'oval' : 'rect';
    const pin2Shape = onBack ? 'rect' : 'oval';
    // Swap +/- symbol positions so they stay with correct nets when mirrored
    const plusX = onBack ? -1 : 1;
    const minusX = onBack ? 1 : -1;
    
    return `
    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer ${p.side}.Cu) (tedit 58D3FE32)

        (descr "JST PH series connector, S2B-PH-K, side entry type, through hole, Datasheet: http://www.jst-mfg.com/product/pdf/eng/ePH.pdf")
        (tags "connector jst ph")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start -2.25 0.25) (end -2.25 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -2.25 -1.35) (end -2.95 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -2.95 -1.35) (end -2.95 6.25) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -2.95 6.25) (end 2.95 6.25) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 2.95 6.25) (end 2.95 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 2.95 -1.35) (end 2.25 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 2.25 -1.35) (end 2.25 0.25) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 2.25 0.25) (end -2.25 0.25) (layer ${p.side}.SilkS) (width 0.15))

        ${'' /* plus symbol for positive pin */}
        (fp_line (start ${plusX} 1.5) (end ${plusX} 2.0) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start ${plusX - 0.25} 1.75) (end ${plusX + 0.25} 1.75) (layer ${p.side}.SilkS) (width 0.15))

        ${'' /* minus symbol for negative pin */}
        (fp_line (start ${minusX} 1.5) (end ${minusX} 2.0) (layer ${p.side}.SilkS) (width 0.15))

        (pad 1 thru_hole ${pin1Shape} (at -1 0 ${p.r}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${pin1Net})
        (pad 2 thru_hole ${pin2Shape} (at 1 0 ${p.r}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${pin2Net})
            
    )
    `;
  },
};
