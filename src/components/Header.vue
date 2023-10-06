<template>
  <div>
    <header
      class="z-50 fixed w-full bg-background-dark text-light py-3 px-4 flex justify-center"
    >
      <div class="box flex items-center justify-between relative">
        <a
          href="#/"
          class="router-link-active router-link-exact-active link brand mr-8 text-white"
          aria-current="page"
          >Shuuz</a
        >
        <!-- nav-->
        <Navbar></Navbar>
        <div class="nav-right">
          <button class="icon-button md:flex hidden">
            <i class="eva-hover"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffffff"
                class="eva eva-animation eva-icon-hover-undefined"
              >
                <g data-name="Layer 2">
                  <g data-name="person">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path
                      d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
                    ></path>
                    <path
                      d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"
                    ></path>
                  </g>
                </g></svg></i
            ><span class="sr-only">User profile</span></button
          ><a href="#/cart"
            ><button
              class="btn--md btn--secondary btn flex rounded font-medium hover:shadow-md focus:ring-2 md:flex hidden"
            >
              <i class="eva-hover"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  class="eva eva-animation eva-icon-hover-undefined"
                >
                  <g data-name="Layer 2">
                    <g data-name="shopping-cart">
                      <rect width="24" height="24" opacity="0"></rect>
                      <path
                        d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"
                      ></path>
                      <circle cx="7.5" cy="19.5" r="1.5"></circle>
                      <circle cx="17.5" cy="19.5" r="1.5"></circle>
                    </g>
                  </g></svg></i
              ><span class="sr-only">Shopping cart</span>
            </button></a
          ><button
            class="btn--md btn--secondary btn flex rounded font-medium hover:shadow-md focus:ring-2 flex md:hidden"
          >
            <i class="eva-hover"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#ffffff"
                class="eva eva-animation eva-icon-hover-undefined"
              >
                <g data-name="Layer 2">
                  <g data-name="menu">
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(180 12 12)"
                      opacity="0"
                    ></rect>
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="2"
                      rx=".95"
                      ry=".95"
                    ></rect>
                    <rect
                      x="3"
                      y="16"
                      width="18"
                      height="2"
                      rx=".95"
                      ry=".95"
                    ></rect>
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="2"
                      rx=".95"
                      ry=".95"
                    ></rect>
                  </g>
                </g></svg></i
            ><span class="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
<script setup>
import Navbar from './Navbar.vue';
</script>
<style scoped></style>
