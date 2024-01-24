'use client'

export default function Front() {
  console.log("hello both")
  return (
  <div className="m-6 w-full">
    <div className="pt-20 flex justify-center">
      <h1 className="font-bold text-2xl">This is the homepage</h1>
    </div>
    <h1>This app has 3 underpages /front - /back - /database <br/> 
    please check them out</h1>
  </div>)
}