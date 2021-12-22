<template>
    
  <router-link to="/about" class="link">
        <div class="relative rounded-lg bg-gradient-to-t from-grayscale-darkestgray">    
          <div>
            <span class="z-10 absolute bottom-20 pl-10 text-4xl font-bold text-grayscale-white" id="title">{{title}}</span>
          </div>
            <div>
              <img id= "afbeelding" :src='afbeelding' class="bg-gradient-to-b from-grayscale-darkestgray to-grayscale-white object-cover mix-blend-multiply bg-cover bg-center rounded" alt="colab">  
            </div>
              <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
          </div>
  </router-link>


</template>