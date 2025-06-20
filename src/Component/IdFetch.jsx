import React from 'react'

export const IdFetch= async() =>{

    try{
      const responce = await fetch(`https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/auth/get-website-by-uid/PRJ00003`);
      const result=await responce.json();
      return result.data._id;
    }catch(error){
      console.log("Failed ",error);
      throw error;
    }
  };

