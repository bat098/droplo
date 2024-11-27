import Image from "next/image"
import Button from "./components/Button/Button"

export default function Home() {
  return (
    <div>
      <Button
        icon={
          <Image src="/icons/add.svg" width={20} height={20} alt="add icon" />
        }
        variant="contained"
        color="purple"
      >
        Dodaj pozycję menu
      </Button>
    </div>
  )
}
