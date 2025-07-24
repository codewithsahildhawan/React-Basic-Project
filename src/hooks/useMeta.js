import { useEffect } from "react";

export const useMeta = ({title, description, keywords}) => {
  useEffect(() =>{
    if (title) {
        document.title = title;
    }

    const updateMeta = (name, content) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if(!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    };

    if(description) {
        updateMeta("description", description);
    }

    if(keywords) {
        updateMeta("keywords", keywords);
    }

  },[title, description, keywords])
}
