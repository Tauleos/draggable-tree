<template>
  <transition @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
              name="c-move"
  >
    <slot/>
  </transition>
</template>

<script>
  export default {
    name:'c-transition',
    data () {
      return {};
    },
    methods: {
      beforeEnter (e) {
        e.style.height='';
      },
      enter (e) {
        const { height } = getComputedStyle(e);
        e.style.visibility = '';
        e.style.height = 0;
        setTimeout(()=>{
          e.style.height = height;
        },0)
        
      },
      afterEnter (e) {
        e.style.height='';
      },
      beforeLeave (e) {
        const { height } = getComputedStyle(e);
        e.style.height = height;
      },
      leave (e) {
        
        setTimeout(()=>{
          e.style.height = 0;
        },0)
      },
      afterLeave (e) {
        e.style.height = '';
      },
    },
  };
</script>

