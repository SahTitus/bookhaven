import BookForm from '@components/forms/BookForm'
import { fetchBook } from '@lib/actions/book.action'
import { initialValues } from '@lib/constants/initialValues'
import React from 'react'


const page = async ({ searchParams }) => {
    const slug = searchParams?.slug

    let book = initialValues.book
    if (slug) { book = await fetchBook(slug) }

    console.log(book,slug)

    return (
        <div className='mt-20 bg-red-600'>
            <BookForm  defaultFormValues={book} slug={slug} />
        </div>
    )
}

export default page
