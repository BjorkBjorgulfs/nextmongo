
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI
if(!uri){
    throw new Error("environment variable MONGODB_URI is not defined");
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Querying our database
      const cursor = await client.db("test").collection("greetings").find();
      const array = await cursor.toArray()
      return array;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  
  export default async function Database() {
      const greetings =  await run();
      return (
        <div className='m-6 w-full'>
            <div className="pt-20 flex justify-center">
                <h1 className="font-bold text-2xl">This is the database page</h1>
            </div>
            <h2 className='font-semibold text-md'>Here is a list of greetings from MongoDB</h2>
            <div className='w-80 mt-4 p-2 flex flex-col gap-4 border-2 border-gray-500 rounded-md'>
                {greetings.map(greetingObj=> {
                    return <h1 key={greetingObj._id.toString()}>- {greetingObj.greeting}</h1>}
                )}
            </div>
        </div>
        )
    }