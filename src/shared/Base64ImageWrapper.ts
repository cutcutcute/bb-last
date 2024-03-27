import React from "react";



export const imageBase64 = (imageSource: string): string => {
    return `data:image/jpeg;base64,${imageSource}`
}