<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deshi-Deals | Home</title>
    <link rel="stylesheet icon" href="./assets/logo.png" type="image/x-icon" />
    <!-- daisyUI CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@5"
      rel="stylesheet"
      type="text/css"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body class="font-workSans bg-gray-50">
    <!-- navbar -->
    <header class="shadow py-3">
      <div class="logo flex justify-center items-center gap-2">
        <img src="./assets/logo.png" alt="" class="w-12" />
        <div>
          <h2 class="text-pink-500 text-3xl">
            Deshi <span class="font-bold">Deals</span>
          </h2>
          <p class="text-md text-gray-500">Cheap Price, Best Quality</p>
        </div>
      </div>
    </header>

    <!-- banner -->
    <section
      id="banner"
      class="h-[520px] md:h-screen px-10 relative flex flex-col justify-start items-center text-center mt-24 bg-gradient-to-b from-[white] to-[#F6DDEA]"
    >
      <div>
        <div>
          <h1 class="mb-8 font-bold text-3xl md:text-5xl leading-none">
            Purchase TK 200 or above & get
            <br /><span class="text-[#E527B2] leading-[1.5]">20% off</span>
          </h1>
        </div>
        <div>
          <button class="text-base md:text-2xl font-medium mr-12">
            Use Promo Code
          </button>
          <button
            class="bg-[#E527B2] rounded-[8px] text-base md:text-2xl text-white font-semibold px-14 py-2"
          >
            SELL200
          </button>
        </div>
      </div>

      <!-- overlap image -->
      <div class="px-10 w-[500px] h-[550px] md:w-[1000px] bottom-0 left-1/2 transform translate-y-1/4 md:translate-y-1/7 flex justify-center items-center">
        <img src="./assets/hero-bg.png" alt="" />
      </div>
    </section>

    <section  id="products-container"
      class="px-10 md:px-0 md:mx-auto py-40 w-11/12  grid md:grid-cols-12 gap-10" >

      <section id="product-box" class=" md:col-span-9 ">
        <div class="kitchen">
          <h1 class="text-2xl font-bold m-5">Kitchenware</h1>
          <div class="kitchen-items grid md:grid-cols-3 gap-8 m-3">
            <!-- product cart 1 -->
            <div id="card-1" class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/kitchen-1.png"
                  alt="kitchen"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 id="card-title-1" class="card-title">রান্না করার স্টিক</h2>
                <p>⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>150.00</span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            </div>
            <!-- product cart 2 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/kitchen-2.png"
                  alt="kitchen"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">থালা বাটি</h2>
                <p>⭐⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>250.00</span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            </div>
            <!-- product cart 3 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/kitchen-3.png"
                  alt="kitchen"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">স্টিলের হাড়ি</h2>
                <p>⭐⭐</p>
                <p class="text-gray-500"><span>550.00</span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            </div>
            
          </div>
        </div>

        <div class="sportswear">
          <h1 class="text-2xl font-bold m-5">Sportswear</h1>
          <div class="sportswear-items grid md:grid-cols-3 gap-8 m-3">
            <!-- product cart 1 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/sports-1.png"
                  alt="sports"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Sports Back Cap</h2>
                <p>⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>49.00 </span> TK</p>
                </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
                </div>
            </div>
            <!-- product cart 2 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/sports-2.png"
                  alt="sports"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Full Jersey Set</h2>
                <p>⭐⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>69.00 </span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
                </div>
            </div>
            <!-- product cart 3 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/sports-3.png"
                  alt="sports"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Sports cates</h2>
                <p>⭐⭐⭐</p>
                <p class="text-gray-500"><span>159.00 </span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            
            </div>
          </div>
        </div>

        <div class="furniture">
          <h1 class="text-2xl font-bold m-5">Furniture</h1>
          <div class="furniture-items grid md:grid-cols-3 gap-8 m-3">
            <!-- product cart 1 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/furniture-1.png"
                  alt="furniture"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Single Relax Chair</h2>
                <p>⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>119.00 </span> TK</p>
                </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            </div>
            <!-- product cart 2 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/furniture-2.png"
                  alt="furniture"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Children play</h2>
                <p>⭐⭐⭐⭐⭐</p>
                <p class="text-gray-500"><span>229.00 </span> TK</p>
                </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
                </div>
            </div>
            <!-- product cart 3 -->
            <div class="card bg-base-100 shadow-sm">
              <figure class="bg-gray-200 m-5 rounded-xl">
                <img
                  src="./assets/furniture-3.png"
                  alt="furniture"
                  class="rounded-xl py-5"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Flexible Sofa</h2>
                <p>⭐⭐⭐</p>
                <p class="text-gray-500"><span>339.00 </span> TK</p>
              </div>
              <div class="m-5">
                  <button class="btn bg-pink-400 text-white btn-block cart-btn">
                    Add to Cart
                  </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- side cart -->
      <aside id="cart-box" class=" md:col-span-3 md:py-18">
        <div class="bg-white p-5 flex flex-col gap-2 rounded-[8px] ">
          <h2 class="font-bold">Have coupon?</h2>
          <div class="join">
            <input class="input join-item" placeholder="Coupon Code" />
            <button class="btn join-item rounded-r-md px-8
            bg-[#E527B2] text-white">Apply</button>
          </div>
        </div>

        <div class="cart-box bg-white mt-10 p-5 flex flex-col  rounded-[8px] ">
            <div class="flex justify-between items-center mb-2">
              <h2 class="font-bold">Cart History</h2>
              <button class="btn rounded-r-md px-6 font-bold
              bg-white text-[#E527B2] border-2 border-[#E527B2]" 
              id="btn-clear">Clear</button>
            </div>
            <div id="cart-container" class="space-y-5 text-end" ></div>
            <div class="">
                <h2>Total Price: <span id="total-price">0</span> TK</h2>
                <h2>Total Quantity: <span id="total-quantity">0</span> Items</h2>
                <button class="btn btn-block  bg-[#E527B2] text-base text-white">
                    Make Purchase
                </button>
            </div>
        </div>
      </aside>

    </section>


    <!-- script js -->
     <script src="./script/index.js"></script>
  </body>
</html>
