<template>
  <div class="w-[61px] bg-white">
    <div id="app">
      <div class="fixed inset-0 flex z-40">
        <div
          class="absolute flex top-0 h-screen z-20"
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
        >
          <button
            @click.prevent="toggle()"
            class="w-14 h-14 p-1 rounded text-white text-center focus:outline-none hover:bg-gray-500 transition-color duration-300 flex items-center justify-center"
          >
            <span
              class="block transform origin-center font-bold text-black"
            >
            <i class="pi pi-bars w-12 h-12 px-5 mt-8"></i>
            </span>
          </button>
          <div
            ref="content"
            class="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center"
            :class="[open ? 'max-w-lg' : 'max-w-0']"
          >
            <div class="w-44 h-[850px] text-center">
              <div class="flex flex-row h-full fixed">
                <nav class="w-[58px] bg-white">
                  <div class="mt-5 flex justify-center">
                    <ul>
                      <li class="text-center mt-2">
                        <a href="#">
                          <img
                            src="../assets/images/icon/Dashboards Button.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <img
                            src="../assets/images/icon/Examples Button.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <img
                            src="../assets/images/icon/Components Button.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Forms Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Tables Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Maps Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Widgets Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>

                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Charts Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>
                      <li class="text-center mt-2">
                        <a href="#">
                          <span>
                            <img
                              src="../assets/images/icon/Calendar Button.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <slot></slot>
          </div>
        </div>

        <transition name="fade">
          <div
            v-if="dimmer && open"
            @click="toggle()"
            class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      dimmer: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
