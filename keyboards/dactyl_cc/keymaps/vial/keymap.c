#include QMK_KEYBOARD_H

enum layers {
    BASE,
    FN, // function keys
    KP, // keypad
};

#define FN_MO LT(FN, KC_PGDN)
#define KP_MO LT(KP, KC_END)

// What Vial's "Revert changes" restores; day to day edits live in EEPROM.
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [BASE] = LAYOUT(
        KC_GRV,  KC_1,    KC_2,   KC_3,    KC_4,    KC_5,                                       KC_6, KC_7,    KC_8,    KC_9,   KC_0,    KC_MINS,
        KC_TAB,  KC_Q,    KC_W,   KC_E,    KC_R,    KC_T,                                       KC_Y, KC_U,    KC_I,    KC_O,   KC_P,    KC_BSLS,
        KC_ESC,  KC_A,    KC_S,   KC_D,    KC_F,    KC_G,                                       KC_H, KC_J,    KC_K,    KC_L,   KC_SCLN, KC_QUOT,
        KC_LSFT, KC_Z,    KC_X,   KC_C,    KC_V,    KC_B,                                       KC_N, KC_M,    KC_COMM, KC_DOT, KC_SLSH, KC_RSFT,
                 KC_MINS, KC_EQL, KC_LBRC, KC_RBRC,                                                   KC_LEFT, KC_DOWN, KC_UP,  KC_RGHT,
                                                         KC_LCTL, KC_LALT,    KC_LGUI, KC_RCTL,
                                                 KC_BSPC, KC_DEL, KC_HOME,    KC_PGUP, KC_ENT,  KC_SPC,
                                                                  KP_MO,      FN_MO
    ),
    [FN] = LAYOUT(
        KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,                                          KC_F7,   KC_F8,   KC_F9,   KC_F10,  KC_F11,  KC_F12,
        _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
        _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
        _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
                 _______, _______, _______, _______,                                                          _______, _______, _______, _______,
                                                              _______, _______,    _______, _______,
                                                     _______, _______, _______,    _______, _______, _______,
                                                                       _______,    _______
    ),
    [KP] = LAYOUT(
        _______, _______, _______, _______, _______, _______,                                        _______, KC_NUM,  KC_PEQL, KC_PSLS, KC_PAST, _______,
        _______, _______, _______, _______, _______, _______,                                        _______, KC_P7,   KC_P8,   KC_P9,   KC_PMNS, _______,
        _______, _______, _______, _______, _______, _______,                                        _______, KC_P4,   KC_P5,   KC_P6,   KC_PPLS, _______,
        _______, _______, _______, _______, _______, _______,                                        _______, KC_P1,   KC_P2,   KC_P3,   KC_PENT, _______,
                 _______, _______, _______, _______,                                                          _______, _______, KC_PDOT, _______,
                                                              _______, _______,    _______, _______,
                                                     _______, _______, _______,    _______, _______, KC_P0,
                                                                       _______,    _______
    ),
};
