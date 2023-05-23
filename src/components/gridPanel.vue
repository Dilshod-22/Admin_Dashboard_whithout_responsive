<template>
  <div class="gridPanel">
    <div class="wrapper">
      <div class="lineChart h-[483px] w-[1188px] rounded-lg">
        <img class="lineIMG" src="../assets/images/Sales Value Chart.svg" alt="">
      </div>
      <div class="barChart">
        <img src="../assets/images/Total orders Chart.svg" alt="">
      </div>
      <div class="teamMember">
        <h1 class="px-5 py-5">Team members</h1>
        <Card v-for="cardinfo in cardInfo" v-bind:cardinfo="cardinfo" />
      </div>
      <div class="todoList">
        <h1 class="px-5 py-5">To do list</h1>
        <todoList v-for="todoinfo in todoInfo" v-bind:todoinfo="todoinfo" />
      </div>
      <div class="progress">
        <h1 class="px-5 py-5">Progress track</h1>
          <Progress
            v-for="progressinfo in progressInfo"
            v-bind:progressinfo="progressinfo"
          />
      </div>
      <span class="wrapper2">
        <div class="w-[731px] h-[1188px] feedback">
          <Feedback />
        </div>
        <div class="lightTable">
          <lightTable />
          <div class="flex justify-between mt-12">
            <div
              class="w-[503px] h-[258px] bg-[#172B4D] rounded-md px-5 py-5 text-white"
            >
              <h1 class="text-2xl flex h-8">
                <p class="text-base mr-1">$</p>
                3,300
              </h1>
              <p class="font-light mt-3 text-sm">Your current balance</p>
              <p><span class="text-[lime]">+ 15%</span> ($250)</p>
              <button
                class="w-full bg-white text-[#5E72E4] h-10 rounded-lg mt-3"
              >
                Add credit
              </button>
              <div class="mt-9 flex justify-between">
                <div>
                  Orders: 60%
                  <div
                    class="w-52 bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-2"
                  >
                    <div
                      class="bg-[lime] h-1 rounded-full dark:bg-gray-300"
                      style="width: 60%"
                    ></div>
                  </div>
                </div>
                <div>
                  Sales: 40%
                  <div
                    class="w-52 bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-2"
                  >
                    <div
                      class="bg-[red] h-1 rounded-full dark:bg-gray-300"
                      style="width: 60%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-[503px] h-[258px] bg-gradient-to-r from-[#F5365C] to-[#F56636] rounded-md px-5 py-5"
            >
              <div class="flex justify-between">
                <img src="../assets/images/ImageCoin.svg" alt="" />
                <button
                  class="text-[green] bg-[lightseagreen] h-8 w-14 rounded-md text-xs"
                >
                  ACTIVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
      <div class="eight">
        <div class="header flex justify-between items-center px-5">
          <h1 class="h-7">Page visits</h1>
          <button
            class="w-20 bg-lightBlue text-white rounded-md h-8 flex items-center justify-center"
          >
            See All
          </button>
        </div>
        <div class="title bg-backColor px-5 w-full h-12">
          <h6>PAGE NAME</h6>
          <h6>VISITORS</h6>
          <h6>UNIQUE USERS</h6>
          <h6>BOUNCE RATE</h6>
        </div>
        <pagevisit v-for="page in pages" v-bind:page="page" />
      </div>
      <div class="nine">
        <div class="header flex justify-between items-center h-16 px-5">
          <h1 class="h-7">Social traffic</h1>
          <button
            class="w-20 bg-lightBlue text-white rounded-md h-8 flex items-center justify-center"
          >
            See All
          </button>
        </div>
        <div class="tab bg-backColor px-5 w-full h-12">
          <h6>REFERRAL</h6>
          <h6>VISITORS</h6>
        </div>
        <socialTraffic v-for="social in socials" v-bind:social="social" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../ui-component/card.vue";
import todoList from "../ui-component/cardTodoList.vue";
import Progress from "../ui-component/cardProgress.vue";
import lightTable from "../ui-component/lightTable.vue";
import Feedback from "../ui-component/feedback.vue";
import pagevisit from "../ui-component/pagevisit.vue";
import socialTraffic from "../ui-component/socialTraffic.vue";

import Iconimage from "../assets/images/Image.svg";
import Iconimage2 from "../assets/images/Image (1).svg";
import Iconimage3 from "../assets/images/Image (2).svg";
import Iconimage4 from "../assets/images/Image (3).svg";

export default {
  data() {
    return {
      cardInfo: [
        {
          name: "John Michael",
          status: "Online",
        },
        {
          name: "Alex Smith",
          status: "In a meeting",
        },
        {
          name: "Samantha Ivy",
          status: "Offline",
        },
        {
          name: "John Michael",
          status: "Online",
        },
      ],
      todoInfo: [
        {
          title: "Call with Dave",
          clock: "10:30 AM",
          check: true,
        },
        {
          title: "Launch meeting",
          clock: "10:30 AM",
          check: false,
        },
        {
          title: "Argon Dashboard launch",
          clock: "10:30 AM",
          check: false,
        },
        {
          title: "Winter Hackaton",
          clock: "10:30 AM",
          check: true,
        },
      ],
      progressInfo: [
        {
          title: "Argon Design System",
          level: "60%",
          img: Iconimage,
        },
        {
          title: "Argon Design System",
          level: "100%",
          img: Iconimage2,
        },
        {
          title: "Argon Design System",
          level: "70%",
          img: Iconimage3,
        },
        {
          title: "Argon Design System",
          level: "90%",
          img: Iconimage4,
        },
      ],
      pages: [
        {
          url: "/argon/",
          visitors: 4569,
          uniqueUser: 340,
          bounce: "46.53%",
        },
        {
          url: "/argon/index.html",
          visitors: 3985,
          uniqueUser: 319,
          bounce: "46.53%",
        },
        {
          url: "/argon/charts.html",
          visitors: 3513,
          uniqueUser: 294,
          bounce: "36.49%",
        },
        {
          url: "/argon/tables.html",
          visitors: 2050,
          uniqueUser: 147,
          bounce: "50.87%",
        },
        {
          url: "/argon/profile.html",
          visitors: 1795,
          uniqueUser: 190,
          bounce: "46.53%",
        },
      ],
      socials: [
        {
          name: "Facebook",
          visitors: 1480,
          degre: "60%",
        },
        {
          name: "Facebook",
          visitors: 5480,
          degre: "70%",
        },
        {
          name: "Google",
          visitors: 4807,
          degre: "80%",
        },
        {
          name: "Instagram",
          visitors: 3678,
          degre: "75%",
        },
        {
          name: "twitter",
          visitors: 2645,
          degre: "30%",
        },
      ],
    };
  },
  components: {
    Card,
    todoList,
    Progress,
    lightTable,
    Feedback,
    pagevisit,
    socialTraffic,
  },
};
</script>

<style scoped>
@import url("./gridPanel.css");
</style>
