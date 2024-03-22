import Image from "next/image";
import {db} from "../lib/db";
import Button from "@/components/ui/Button";

export default async function Home() {
  return <Button variant={"ghost"}>hello</Button>;
}
