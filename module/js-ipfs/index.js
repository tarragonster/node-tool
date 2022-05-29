import {create} from 'ipfs-http-client'

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
})

const file = await client.add("text")
console.log(file)

//ref  https://www.youtube.com/watch?v=jI6wcuY8p2Y&t=261s&ab_channel=AdityaJoshi
// limi https://community.infura.io/t/ipfs-hosting-files-for-free/3498/3