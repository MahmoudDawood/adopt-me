import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

export default function useBreedList(animal) {
  const result = useQuery(["breed", animal], fetchBreed);
  return [result?.data?.breeds ?? [], result.status];
}
