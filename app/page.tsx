import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">hello</h1>
      <Button
        as={Link}
        href="/members"
        variant="bordered"
        color="danger"
        startContent={<GoSmiley />}
      >
        Click me
      </Button>
    </div>
  );
}
