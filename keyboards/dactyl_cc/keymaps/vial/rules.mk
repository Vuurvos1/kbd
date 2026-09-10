VIA_ENABLE = yes
VIAL_ENABLE = yes

# Drop what the browser editor makes redundant; the Pro Micro only has 28 KB.
LTO_ENABLE = yes
COMMAND_ENABLE = no
CONSOLE_ENABLE = no
MAGIC_ENABLE = no
GRAVE_ESC_ENABLE = no
SPACE_CADET_ENABLE = no

# 1855 bytes, and covers space cadet: on-tap ( with on-hold shift.
TAP_DANCE_ENABLE = yes

# 5144 bytes, but the only way to tune the thumb layer taps without reflashing.
QMK_SETTINGS = yes

# Rarely used, and repeat key would cost another 48 bytes of EEPROM.
COMBO_ENABLE = no
KEY_OVERRIDE_ENABLE = no
LAYER_LOCK_ENABLE = no
REPEAT_KEY_ENABLE = no
