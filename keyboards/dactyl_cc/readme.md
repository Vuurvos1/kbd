# dactyl_cc

![dactyl_cc](imgur.com image replace me!)

_A short description of the keyboard/project_

- Keyboard Maintainer: [Sam](https://github.com/Vuurvos1)
- Hardware Supported: _The PCBs, controllers supported_
- Hardware Availability: _Links to where you can find this hardware_

Make example for this keyboard (after setting up your build environment):

    make dactyl_cc:default

Flashing example for this keyboard:

    make dactyl_cc:default:flash

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Vial

The `vial` keymap can be remapped from the browser at [vial.rocks](https://vial.rocks).
The layout is compiled into the firmware, so there is no definition file to load.

Hit **Connect**, then hold grave and the far right minus key to unlock writing.
One of those is on each half, so the halves have to be linked for the combo to
register. Edits go to EEPROM: they survive a replug, but a reflash resets them
to `keymaps/vial/keymap.c`.

On Linux, Chrome needs access to the raw HID device or it will list the board
and then hang on connect:

    sudo tee /etc/udev/rules.d/60-vial.rules >/dev/null <<'EOF'
    KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{serial}=="*vial:f64c2b3c*", MODE="0660", GROUP="users", TAG+="uaccess"
    EOF
    sudo udevadm control --reload-rules

Then replug the board. The `60-` prefix matters: the `uaccess` ACL is applied by
`73-seat-late.rules`, so Vial's documented `99-` name adds the tag too late and
only works if your account is in the `users` group.

Enabled features are in `keymaps/vial/rules.mk`. `vial.json` is the layout
Vial draws and has to agree with the `LAYOUT` macro in `keyboard.json` —
legends are `row,col`, offsets are relative to the previous key.

## Building and flashing

Vial builds against the [Vial fork](https://github.com/vial-kb/vial-qmk) of
QMK, not upstream:

    git clone --recurse-submodules https://github.com/vial-kb/vial-qmk
    ln -s "$PWD/keyboards/dactyl_cc" vial-qmk/keyboards/dactyl_cc
    make dactyl_cc:vial

Both halves get the same firmware; whichever one has the USB cable becomes the
left half and master. Get into the Pro Micro's bootloader either way:

- **Double tap the reset button** on the back. Preferred once Vial holds
  settings worth keeping.
- **Hold the bootmagic key while plugging in** — grave on the left half, `6` on
  the right. Both are local matrix (0,0), which lands on the outer column on
  the left and the inner column on the right. This also wipes EEPROM, taking
  any Vial customisation with it.

Either way a `/dev/ttyACM*` appears for about 8 seconds. Flash within it:

    sudo avrdude -p atmega32u4 -c avr109 -P /dev/ttyACM0 \
      -U flash:w:dactyl_cc_vial.hex:i

`make dactyl_cc:vial:flash` does the same if the QMK CLI is set up, and
`QK_BOOT` works as a third way in once mapped to a key. GitHub Actions builds
every keymap on push, so the `.hex` can be downloaded from the run instead of
building locally.
