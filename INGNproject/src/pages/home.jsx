import { Link } from "react-router-dom";
import { useGetQuery } from "../hooks/useGetQuery";
import { getByCategory } from "../queries/getByCategory";
import { useState } from "react";
import { Navbar } from "../component/Navbar";
import styles from './home.module.scss';

export const Home = () => {

    const [category, setCategory] = useState('kultur');



    const {data, isLoading} = useGetQuery(
        getByCategory,
         {key: "categoryData", refetch: category},
          { selectedCat: category,}
    );
        console.log(data);

    if(isLoading){
      return(
        <div>Loading....</div>
      );
    }

    
  return (
    <>
        <Navbar setCategory={setCategory}/>
        <div>{data.articles.map((item) => {
          return(
            <div className={styles.articleContainer}>
            <img src={item.media.url}/>
            <h2>{item.headline}</h2>
            <p>{item.articleContent}</p>
            <b>{item.createdAt.substring(0, 10)}</b>
            </div>
          )
        })}</div>
    </>
  );
};