import fs from 'fs'

const books = [
	{
		title: 'Belajar HTML, CSS, dan Javascript Dasar',
		cover: 'belajar-html-css-js-dasar.png',
		price: 0
	},
	{
		title: 'Belajar Vue JS Sampai Mahir',
		cover: 'belajar-vuejs-sampai-mahir.png',
		price: 80000
	},
	{
		title: 'Menguasai MySQL Sampai Mahir',
		cover: 'menguasai-mysql-sampai-mahir.png',
		price: 80000
	},
	{
		title: 'Belajar Laravel Sampai Mahir',
		cover: 'belajar-laravel-sampai-mahir.png',
		price: 100000
	},
	{
		title: 'Membangun Aplikasi Perpustakaan dengan PHP',
		cover: 'membangun-aplikasi-perpustakaan-dengan-php.png',
		price: 40000
	},
	{
		title: 'Membangun Toko Online dengan Laravel',
		cover: 'membangun-toko-online-dengan-laravel.png',
		price: 145000
	}
]

fs.mkdir('books', {}, () => {
	fs.mkdir('books/images', () => {
		books.forEach(book => {
			const filename = book.title.replace(/[,]/gi, '')
				.split(' ')
				.map(word => word.toLowerCase())
				.join('-')

			const md = `---
	title: ${book.title}
	cover: './images/${filename}/cover.png'
	price: ${book.price}
	---`
			fs.mkdir(`books/images/${filename}`, () => {
				fs.rename(`src/assets/books/${book.cover}`, `books/images/${filename}/cover.png`, err => {
					console.log(err)
					fs.writeFile(`books/${filename}.md`, md, err => console.log(err))      
				})
			})
		})
	})
})