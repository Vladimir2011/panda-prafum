export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      secondary: 'champagne',
      neutral: 'stone',
      success: 'emerald',
      info: 'sky',
      warning: 'amber',
      error: 'rose',
    },
    button: {
      slots: {
        base: 'min-h-11 cursor-pointer rounded-xl font-semibold',
      },
    },
    input: {
      slots: {
        base: 'min-h-11 rounded-lg',
      },
    },
    card: {
      slots: {
        root: 'rounded-2xl',
      },
    },
    badge: {
      slots: {
        base: 'rounded-full font-semibold',
      },
    },
    modal: {
      slots: {
        overlay: 'bg-stone-950/35 backdrop-blur-[2px]',
        content: 'ring-0 shadow-2xl shadow-stone-950/20',
      },
    },
    popover: {
      slots: {
        content: 'ring-stone-200 shadow-xl shadow-stone-950/15',
      },
    },
    slideover: {
      slots: {
        overlay: 'bg-stone-950/35 backdrop-blur-[2px]',
        content: 'shadow-2xl shadow-stone-950/15',
      },
    },
    drawer: {
      slots: {
        overlay: 'bg-stone-950/35 backdrop-blur-[2px]',
        content: 'bg-white shadow-2xl',
        handle: 'bg-stone-300',
      },
    },
  },
})
