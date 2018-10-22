# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

student = Student.create(firstname: 'Oski', lastname: 'The Bear', username: 'oskithebear', email: 'oski@example.edu', year: 2021, major: 'Computer Science', linkedin: 'https://www.linkedin.com/in/exampleuser', facebook: 'https://www.facebook.com/exampleuser', password: 'password')

student.update(confirmed_at: DateTime.now)