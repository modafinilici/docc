<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <!-- <Logo :width="80" /> -->
          <h2 class="text-3xl font-black tracking-tighter border-none">
            Modafinilici blog
          </h2>
        </div>
        <h1 class="text-5xl text-center lg:text-5xl">
          Informatii despre modafinil
        </h1>
        <p class="text-xl font-medium text-center">
          Ce este modafinilul, cum se administreaza, care sunt beneficiile utilizarii, care sunt efectele secundare, statutul legal in Romania.          
          <br>
          </p>
          <h3 class="font-bold tracking-wide text-ui-primary">
            Intrebari frecvente
          </h3>
          <div class="w-full md:w-3/5 mx-auto p-8">
                  <div class="shadow-md">
                      <div class="tab w-full overflow-hidden">
                        <input class="absolute opacity-0" id="tab-single-one" type="radio" name="faq">
                        <label class="block p-4 leading-normal cursor-pointer" for="tab-single-one">Label One</label>
                        <div class="tab-content overflow-hidden border-l-2 border-indigo-500 leading-normal">
                            <p class="p-5">Lorem</p>
                        </div>
                      </div>
                      <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-single-two" type="radio" name="faq">
                        <label class="block p-4 leading-normal cursor-pointer" for="tab-single-two">Label Two</label>
                        <div class="tab-content overflow-hidden border-l-2 border-indigo-500 leading-normal">
                            <p class="p-5">Lorem ipsum.</p>
                        </div>
                      </div>
                      <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-single-three" type="radio" name="faq">
                        <label class="block p-4 leading-normal cursor-pointer" for="tab-single-three">Label Three</label>
                        <div class="tab-content overflow-hidden border-l-2 border-indigo-500 leading-normal">
                            <p class="p-5">Lorem ipsum dolor.</p>
                        </div>
                      </div>
                  </div>
                </div>

        <div class="flex justify-center mb-4">
          <g-link
            to="/modafinil-romania/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Citeste mai multe.
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <span class="border-b border-dashed border-ui-primary text-ui-primary">Pe acest site sunt prezentate atat informatii obiective, cat si pareri personale.</span>
        
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Incredibly Fast
          </h3>
          <p class="text-lg text-left">
            Powered by Gridsome. Built on Vue. Outputs static files. It wont't get any faster than this. <span class="border-b border-dashed border-ui-primary text-ui-primary">No seriously</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Instant Search
          </h3>
          <p class="text-lg text-left">
            All headlines are indexed. Instant search powered by Fuse.js. Find what you are looking for in the <span class="border-b border-dashed border-ui-primary text-ui-primary">blink of an eye</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Lights out
          </h3>
          <p class="text-lg text-left">
            Working late at night again? Enable dark mode with the click of a button.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'Modafinil - Resursa de informare';
    const description = 'Informații despre toate subiectele legate de modafinil - sfaturi în materie de dozare, siguranță și ghiduri pentru utilizatori.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
};

var myRadios = document.getElementsByName('faq');
      var setCheck;
      var x = 0;
      for(x = 0; x < myRadios.length; x++){
          myRadios[x].onclick = function(){
              if(setCheck != this){
                   setCheck = this;
              }else{
                  this.checked = false;
                  setCheck = null;
          }
          };
      }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

 /* Tab content - closed */
         .tab-content {
         max-height: 0;
         -webkit-transition: max-height .35s;
         -o-transition: max-height .35s;
         transition: max-height .35s;
         }
         /* :checked - resize to full height */
         .tab input:checked ~ .tab-content {
         max-height: 100vh;
         }
         /* Label formatting when open */
         .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/

         }
         /* Icon */
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }
         /* Icon formatting - closed */
         .tab input[type=checkbox] + label::after {
         content: "+";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
         .tab input[type=radio] + label::after {
         content: "\25BE";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
         /* Icon formatting - open */
         .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);

         }
         .tab input[type=radio]:checked + label::after {
         transform: rotateX(180deg);

         }
</style>