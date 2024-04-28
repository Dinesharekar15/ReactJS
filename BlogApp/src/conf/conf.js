const conf ={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    projectid:String(import.meta.env.VITE_APPWRITE_PROJECT_URL),
    databaseid:String(import.meta.env.VITE_APPWRITE_DATABASE_URL),
    collectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_URL),
    bucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_URL),


}
export default conf