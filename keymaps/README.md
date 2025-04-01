Custom QMK keymaps for my keyboards.

## Usage

Copy the keyboard folder to the qmk/keyboards folder.

Then to compile the keymap, run the following command:

```bash
qmk compile -kb <keyboard_name> -km <keymap_name>
```

Then to flash the keymap to the keyboard, run the following command:

```bash
qmk flash -kb <keyboard_name> -km <keymap_name>
```
