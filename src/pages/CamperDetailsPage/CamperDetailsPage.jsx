import toast from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import { getMovieDetailsById } from "../../campers-api";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function CamperDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { camperId } = useParams();
  const [response, setResponse] = useState([]);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieDetailsById(camperId);
        setResponse(data);
      } catch {
        () => {
          toast.error("Something went wrong, try again!");
        };
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [camperId]);

  return (
    <>
      {isLoading && <Loader />}
      <MovieCard movie={response} backLink={backLinkRef.current} />
    </>
  );
}
