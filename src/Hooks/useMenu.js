import { useEffect, useState } from "react";

const useMenu = ()=>{
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false)
        
      });
  }, []);
return[datas, loading]
}

export default useMenu;