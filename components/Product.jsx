import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product({ product }) {
    return (
        <div className='flex flex-col gap-1 border border-1 rounded-xl bg-white dark:bg-slate-900 overflow-hidden'>
            <Link href={`/product/${product.slug}`} className="rounded-lg overflow-hidden ">
                <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={400}
                    height={20}
                    className="w-full h-full object-center object-cover"
                />
            </Link>
            <div className="pt-10 pb-4 text-center">
                <h3 className="text-md font-medium dark:text-white text-gray-900">
                    <Link href={`/product/${product.slug}`}>
                        {product.name}
                    </Link>
                </h3>
                <div className="mt-3">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex flex-col gap-2 items-center">
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
                        <div>
                            ({product.reviewCount} customer review)
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>

                <Link href={`/product/${product.slug}`} className='block rounded-sm m-4 p-4 px-10 border border-1 border-gray-300 dark:border-gray-200 text-gray-800 dark:text-gray-200 uppercase'><p>SHOP</p>
                </Link>
            </div>
        </div>
    )
}
