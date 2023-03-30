import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import data from "../../data/data";
import Layout from "../../components/Layout";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  // console.log(product)

  if (!product) {
    <main>No Products Found</main>;
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Layout title={product.name}>
      <section className="max-w-full dark:bg-slate-900 p-4 mx-auto overflow-hidden py-28">
        <div className="mb-10">
          <Link href="/">Back to products</Link>
        </div>

        {/* Product */}
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-x-8">
          <div className="max-h-screen">
            {/* Image selector */}
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={400}
              height={20}
              className="w-full h-full object-center object-cover"
            />
          </div>

          {/* Product info */}
          <div className="">
            <h1 className="text-3xl dark:text-gray-200 font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="my-2">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl dark:text-gray-300 text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="my-4">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex gap-3 flex-wrap items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-orange-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <div className=" dark:text-gray-300">
                  ({product.reviewCount} customer review)
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 dark:text-gray-200 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-6">
              <button className="block dark:border border-1 border-gray-400 rounded-sm my-4 p-4 px-10 bg-orange-500 text-white uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>

        {/* <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
                <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                    Customers also bought
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {relatedProducts.map((product) => (
                        <div key={product.id}>
                            <div className="relative">
                                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-lg font-semibold text-white">{product.price}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a
                                    href={product.href}
                                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                                >
                                    Add to bag<span className="sr-only">, {product.name}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
      </section>
    </Layout>
  );
}
