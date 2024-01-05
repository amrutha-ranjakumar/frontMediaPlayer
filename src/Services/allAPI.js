import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";


//1)upload video
export const uploadVideo = async(reqBody)=>{
     return  await commonAPI('POST',`${serverURL}/videos`,reqBody)
 
}

//2)get all videos
export const getAllvideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//3)delete video
export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})

}

//4) add to watch history
export const addtoHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)

}

//5)get all watch history
export const getAllWatchHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//6) delete watch history
export const deletewatchhistaory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})

}

//7) add  category
export const addcategory = async(reqBody)=>{
    return  await commonAPI('POST',`${serverURL}/category`,reqBody)

}

// 8)get all category
export const getAllcategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

//9) delete category
export const deletecategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}



