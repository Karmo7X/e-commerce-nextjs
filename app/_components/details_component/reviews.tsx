import { Star, ThumbsUp, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface Review {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  helpful: number
  avatar: string
  verified: boolean
}
interface ReviewsProps {
  reviews: Review[]
}
export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <>
       <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Customer Reviews</h2>
                  <button className="rounded-full bg-gray-900 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800">
                    Write a Review
                  </button>
                </div>

                {/* Rating Summary */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="rounded-2xl bg-gray-50 p-6">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-gray-900">4.8</span>
                      <div className="mt-2 flex justify-center text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">Based on 128 reviews</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-4">
                        <span className="w-12 text-sm text-gray-600">{rating} stars</span>
                        <div className="flex-1">
                          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                              transition={{ duration: 1, delay: rating * 0.1 }}
                              className="h-full bg-yellow-400"
                            />
                          </div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-600">
                          {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review List */}
                <div className="mt-12 space-y-8">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{review.name}</h3>
                              <div className="mt-1 flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'fill-current' : ''
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">{review.date}</span>
                              </div>
                            </div>
                            {review.verified && (
                              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <p className="mt-4 text-gray-600">{review.comment}</p>
                          <div className="mt-4 flex items-center gap-4">
                            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                              <ThumbsUp className="h-4 w-4" />
                              Helpful ({review.helpful || 0})
                            </button>
                            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                              <MessageCircle className="h-4 w-4" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-8 text-center">
                  <button className="rounded-full border-2 border-gray-900 px-8 py-3 font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white">
                    Load More Reviews
                  </button>
                </div>
    </>
  );
}

