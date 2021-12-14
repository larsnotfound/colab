<template>
  
  <!-- Body -->
  
    <div class="max-w-6xl mx-auto">

<!-- Hero section -->

  <div class="bg-grayscale-white bg-no-repeat bg-right-bottom w-fit" style="background-image: url(images/logo-background.svg)">
  <section class="container mx-auto px-10 sm:px-24 sm:pb-48 lg:px-52">
    <div class="pt-24 flex">
      <div class="">
        <h3 class="text-4xl md:text-6xl font-medium text-left text-grayscale-darkestgray"> We <span class="font-extrabold text-brandprimary-purple">collaborate</span> to boost your business IT power.</h3>
        <p class="mt-7 text-left text-grayscale-darkgray font-bold md:text-xl leading-snug tracking-wider">
          Urbanist Regular is used for all areas of body copy and <br> smaller text. It’s the most effective of the font weights for <br> legibility, and as such, is best used when trying to <br> communicate information clearly and practically.
        </p>
        <div class="lg:flex lg:gap-2"></div>
      </div>
    </div>
    <div class="pt-10">
    <button class="py-3 px-10 rounded-lg hover:bg-grayscale-white hover:text-brandprimary-purple font-bold border hover:border-brandprimary-purple  bg-brandprimary-purple text-grayscale-white border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">More info</button>
    </div>
  </section>

</div>

<!-- About -->

<div class="mt-40 mb-40 grid md:grid-cols-2 gap-20 p-10">
    <div class="self-center">
      <div class="text-4xl font-black dark:text-grayscale-white">‘Go to workplaces for you.</div>
        <div class="text-lg mt-4 text-grayscale-darkgray dark:text-grayscale-white">The work landscape has experienced a permanent shift on a global scale. Consequently, many organizations are struggling to understand the steps required to bring employees into a hybrid environment in a structured way.</div>
    <button class="mt-6 py-3 px-10 rounded-lg hover:bg-grayscale-white hover:text-brandprimary-purple font-bold border hover:border-brandprimary-purple  bg-brandprimary-purple text-grayscale-white border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">More info</button>
</div>

<div class="inline-block">
      <img class="bg-cover bg-center rounded-md" src="../assets/aboutimg.png" alt="colab">
    </div>
</div>

<!-- Tegels -->

          
<div class="grid md:grid-cols-2 gap-6 mb-10 mt-10 sm:grid-cols-1 p-10">

  <router-link to="/aboutus" class="link">
        <div class="bg-grayscale-darkestgray relative rounded-lg">    
            <span class="absolute bottom-20 pl-10 text-4xl font-bold text-grayscale-white">Students</span>
                  
              <div class="opacity-100">
                   <img class="bg-cover bg-center rounded-md" src="../assets/tegelimg.png" alt="colab">  
              </div>
                  <button class="bg-brandprimary-lightpurple hover:bg-brandprimary-purple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info     
                  </button>
        </div>
  </router-link>

  <router-link to="/aboutus" class="link">
        <div class="bg-grayscale-darkestgray relative rounded-lg">    
            <span class="absolute bottom-20 pl-10 text-4xl font-bold text-grayscale-white">Students</span>
                  
              <div class="opacity-100">
                   <img class="bg-cover bg-center rounded-md" src="../assets/tegelimg.png" alt="colab">  
              </div>
                  <button class="bg-brandprimary-lightpurple hover:bg-brandprimary-purple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info     
                  </button>
        </div>
  </router-link>

</div>

<!-- Subtitle-->

<section class="container mx-auto px-10 sm:px-24 lg:px-52 bg-white">

    <div class="pb-20 flex justify-center">

      <div class="">
        <p class="mt-7 text-left text-gray-400 dark:text-grayscale-lightgray font-bold text-3xl md:text-xl leading-snug tracking-wider">Process</p>
        <h3 class="text-3xl md:text-6xl font-300 text-left text-gray-800 dark:text-grayscale-white">
        <span class="font-bold text-purple-600">Workflow</span> to make the next IT step for your company.</h3>
        <div class="items-center justify-center mt-4 lg:flex lg:gap-2"></div>
      </div>
    </div>
  </section>

<!-- Logo grid -->


<div class="container mx-auto px-10 sm:px-24 lg:px-52 mb-10">    
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">      

    <div class="flex justify-center p-1 bg-gray-100">
      <img class="h-24" src="../assets/placeholder.png" alt="logo-tvm">
      </div>      
    <div class="flex justify-center p-1 bg-gray-100">
      <img class="h-24" src="images/logo-unigarant.png" alt="logo-unigarant">
      </div>

    <div class="flex justify-center p-1 bg-gray-100">
      <img class="h-24" src="images/logo-rovecom.png" alt="logo-rovecom">
      </div> 
   
    <div class="flex justify-center p-1 bg-gray-100">
      <img class="h-24" src="images/logo-uwv.png" alt="logo-uwv"></div>    
   </div>  
</div>


    </div>
</template>  