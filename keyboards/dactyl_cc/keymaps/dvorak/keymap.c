#include QMK_KEYBOARD_H

enum layers {
    BASE,
    FN, // function keys
    KP, // keypad
};

// #define CTL_ESC LCTL_T(KC_ESC)
// #define CTL_CAP LCTL_T(KC_CAPS)
// #define ALT_BSP LALT_T(KC_BSPC)
// #define LT_SCLN LT(NAV, KC_SCLN)

// #define TT(NAV) MT(MOD_LCTL, KC_END)
// // mod tap on pgdn key to switch to layer 2
// #define QK_BOOT MT(MOD_LCTL, KC_PGDN)

// mod tap on end key to switch to layer 1

// Maybe switch to something like enter and backspace/del?
#define FN_MO LT(FN, KC_PGDN)
#define KP_MO LT(KP, KC_END)


const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [BASE] = LAYOUT(
        KC_EQL,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,                                       KC_6, KC_7,  KC_8,    KC_9,   KC_0,    KC_MINS,
        KC_TAB,  KC_QUOT, KC_COMM, KC_DOT,  KC_P,    KC_Y,                                       KC_F, KC_G,  KC_C,    KC_R,   KC_L,    KC_SLSH,
        KC_ESC,  KC_A,    KC_O,    KC_E,    KC_U,    KC_I,                                       KC_D, KC_H,  KC_T,    KC_N,   KC_S,    KC_BSLS,
        KC_LSFT, KC_SCLN, KC_Q,    KC_J,    KC_K,    KC_X,                                       KC_B, KC_M,  KC_W,    KC_V,   KC_Z,    KC_RSFT,
                 KC_GRV,  KC_CAPS, KC_LEFT, KC_RGHT,                                                   KC_UP, KC_DOWN, KC_LBRC, KC_RBRC,
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
        // _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
        // _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
        // _______, _______, _______, _______, _______, _______,                                        _______, _______, _______, _______, _______, _______,
        // _______, _______, _______, _______, _______, _______,                                        _______, _______,_______, _______, _______, _______,
        //          _______, _______, _______, _______,                                                          _______, _______, _______, _______,
        //                                                       _______, _______,    _______, _______,
        //                                              _______, _______, _______,    _______, _______, _______,
        //                                                                _______,    _______  
    
};
