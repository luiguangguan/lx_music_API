"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotKey_1 = require("./hotKey");
const local = {
    enable: true,
    keys: {
        'mod+f5': {
            type: hotKey_1.HOTKEY_PLAYER.toggle_play.type,
            name: hotKey_1.HOTKEY_PLAYER.toggle_play.name,
            action: hotKey_1.HOTKEY_PLAYER.toggle_play.action,
        },
        'mod+arrowleft': {
            type: hotKey_1.HOTKEY_PLAYER.prev.type,
            name: hotKey_1.HOTKEY_PLAYER.prev.name,
            action: hotKey_1.HOTKEY_PLAYER.prev.action,
        },
        'mod+arrowright': {
            type: hotKey_1.HOTKEY_PLAYER.next.type,
            name: hotKey_1.HOTKEY_PLAYER.next.name,
            action: hotKey_1.HOTKEY_PLAYER.next.action,
        },
        f1: {
            type: hotKey_1.HOTKEY_COMMON.focusSearchInput.type,
            name: hotKey_1.HOTKEY_COMMON.focusSearchInput.name,
            action: hotKey_1.HOTKEY_COMMON.focusSearchInput.action,
        },
    },
};
const global = {
    enable: false,
    keys: {
        // MediaPlayPause: {
        //   type: HOTKEY_PLAYER.toggle_play.type,
        //   name: '',
        //   action: HOTKEY_PLAYER.toggle_play.action,
        // },
        // MediaPreviousTrack: {
        //   type: HOTKEY_PLAYER.prev.type,
        //   name: '',
        //   action: HOTKEY_PLAYER.prev.action,
        // },
        // MediaNextTrack: {
        //   type: HOTKEY_PLAYER.next.type,
        //   name: '',
        //   action: HOTKEY_PLAYER.next.action,
        // },
        'mod+alt+f5': {
            type: hotKey_1.HOTKEY_PLAYER.toggle_play.type,
            name: hotKey_1.HOTKEY_PLAYER.toggle_play.name,
            action: hotKey_1.HOTKEY_PLAYER.toggle_play.action,
        },
        'mod+alt+arrowleft': {
            type: hotKey_1.HOTKEY_PLAYER.prev.type,
            name: hotKey_1.HOTKEY_PLAYER.prev.name,
            action: hotKey_1.HOTKEY_PLAYER.prev.action,
        },
        'mod+alt+arrowright': {
            type: hotKey_1.HOTKEY_PLAYER.next.type,
            name: hotKey_1.HOTKEY_PLAYER.next.name,
            action: hotKey_1.HOTKEY_PLAYER.next.action,
        },
        'mod+alt+arrowup': {
            type: hotKey_1.HOTKEY_PLAYER.volume_up.type,
            name: hotKey_1.HOTKEY_PLAYER.volume_up.name,
            action: hotKey_1.HOTKEY_PLAYER.volume_up.action,
        },
        'mod+alt+arrowdown': {
            type: hotKey_1.HOTKEY_PLAYER.volume_down.type,
            name: hotKey_1.HOTKEY_PLAYER.volume_down.name,
            action: hotKey_1.HOTKEY_PLAYER.volume_down.action,
        },
        'mod+alt+0': {
            type: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_visible.type,
            name: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_visible.name,
            action: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_visible.action,
        },
        'mod+alt+-': {
            type: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_lock.type,
            name: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_lock.name,
            action: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_lock.action,
        },
        'mod+alt+=': {
            type: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_always_top.type,
            name: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_always_top.name,
            action: hotKey_1.HOTKEY_DESKTOP_LYRIC.toggle_always_top.action,
        },
    },
};
exports.default = {
    local,
    global,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdEhvdEtleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGVmYXVsdEhvdEtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE2RTtBQUU3RSxNQUFNLEtBQUssR0FBb0I7SUFDN0IsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsc0JBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSTtZQUNwQyxJQUFJLEVBQUUsc0JBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSTtZQUNwQyxNQUFNLEVBQUUsc0JBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTTtTQUN6QztRQUNELGVBQWUsRUFBRTtZQUNmLElBQUksRUFBRSxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzdCLElBQUksRUFBRSxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzdCLE1BQU0sRUFBRSxzQkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQ2xDO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDN0IsSUFBSSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDN0IsTUFBTSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDbEM7UUFDRCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsc0JBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJO1lBQ3pDLElBQUksRUFBRSxzQkFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUk7WUFDekMsTUFBTSxFQUFFLHNCQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtTQUM5QztLQUNGO0NBQ0YsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFvQjtJQUM5QixNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRTtRQUNKLG9CQUFvQjtRQUNwQiwwQ0FBMEM7UUFDMUMsY0FBYztRQUNkLDhDQUE4QztRQUM5QyxLQUFLO1FBQ0wsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQyxjQUFjO1FBQ2QsdUNBQXVDO1FBQ3ZDLEtBQUs7UUFDTCxvQkFBb0I7UUFDcEIsbUNBQW1DO1FBQ25DLGNBQWM7UUFDZCx1Q0FBdUM7UUFDdkMsS0FBSztRQUNMLFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxzQkFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBQ3BDLElBQUksRUFBRSxzQkFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBQ3BDLE1BQU0sRUFBRSxzQkFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1NBQ3pDO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDN0IsSUFBSSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDN0IsTUFBTSxFQUFFLHNCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDbEM7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixJQUFJLEVBQUUsc0JBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUM3QixJQUFJLEVBQUUsc0JBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUM3QixNQUFNLEVBQUUsc0JBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUNsQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxzQkFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQ2xDLElBQUksRUFBRSxzQkFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQ2xDLE1BQU0sRUFBRSxzQkFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ3ZDO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLHNCQUFhLENBQUMsV0FBVyxDQUFDLElBQUk7WUFDcEMsSUFBSSxFQUFFLHNCQUFhLENBQUMsV0FBVyxDQUFDLElBQUk7WUFDcEMsTUFBTSxFQUFFLHNCQUFhLENBQUMsV0FBVyxDQUFDLE1BQU07U0FDekM7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsNkJBQW9CLENBQUMsY0FBYyxDQUFDLElBQUk7WUFDOUMsSUFBSSxFQUFFLDZCQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJO1lBQzlDLE1BQU0sRUFBRSw2QkFBb0IsQ0FBQyxjQUFjLENBQUMsTUFBTTtTQUNuRDtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSw2QkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSTtZQUMzQyxJQUFJLEVBQUUsNkJBQW9CLENBQUMsV0FBVyxDQUFDLElBQUk7WUFDM0MsTUFBTSxFQUFFLDZCQUFvQixDQUFDLFdBQVcsQ0FBQyxNQUFNO1NBQ2hEO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLDZCQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUk7WUFDakQsSUFBSSxFQUFFLDZCQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUk7WUFDakQsTUFBTSxFQUFFLDZCQUFvQixDQUFDLGlCQUFpQixDQUFDLE1BQU07U0FDdEQ7S0FDRjtDQUNGLENBQUE7QUFFRCxrQkFBZTtJQUNiLEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQSJ9