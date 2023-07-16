import axios from "axios";
import { useEffect, useState } from "react";
import BaseUrl from "../constant/BaseUrl";

export interface IGroceryItem {
  name: string;
  _id: string;
  user_id: number;
}

export default () => {
  const [items, setItems] = useState<IGroceryItem[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getGroceryItems();
  }, []);

  const getGroceryItems = async () => {
    try {
      setLoading(true);
      const res = await axios({
        url: BaseUrl + "/grocery",
      });
      console.log(res);

      setItems(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    items,
  };
};