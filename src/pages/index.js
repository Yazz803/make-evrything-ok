/* eslint-disable @next/next/no-img-element */
import Spline from "@splinetool/react-spline";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Progress,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openFinished, setOpenFinished] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let interval;

    if (open) {
      interval = setInterval(() => {
        setValue((v) => {
          if (v >= 100) {
            clearInterval(interval);
            setOpen(false);
            setOpenFinished(true);
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
            return 0;
          } else {
            return v + 1;
          }
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="bg-[#FCEBED] h-screen w-screen">
      <NextSeo
        title="Yazz | Make Everything OK"
        description="Semoga harimu menyenangkan :3"
        canonical="https://yazz-make-everything-ok.vercel.app"
        openGraph={{
          url: "https://yazz-make-everything-ok.vercel.app",
          images: [
            {
              url: "https://ih1.redbubble.net/image.4822587175.7657/st,small,507x507-pad,600x600,f8f8f8.jpg",
              width: 600,
              height: 600,
              alt: "Follow my instagram @yazz_803",
            },
          ],
        }}
      />
      <div className="absolute z-50 right-5 top-5">
        <Link href="https://www.instagram.com/yazz_803/" target="_blank">
          <img
            src="/assets/ic-instagram2.svg"
            alt="icon instagram"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="absolute z-50 top-[72%] right-[50%] translate-x-[50%] translate-y-[50%]">
        <Button
          onPress={() => setOpen(true)}
          size="lg"
          radius="full"
          className="bg-pink-300/20 backdrop-blur-sm text-slate-500 text-xl font-bold shadow-md shadow-pink-300 border-2 border-pink-300 active:scale-90 transition duration-150 ease-in-out"
        >
          Make Everything OK
        </Button>
      </div>
      <Modal
        isOpen={open}
        onOpenChange={() => {}}
        hideCloseButton
        onClose={() => setOpen(false)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p className="text-center font-semibold text-xl mb-4">
                  Making everything OK is in progress
                </p>
                <Progress
                  aria-label="Checking..."
                  size="md"
                  value={value}
                  color="danger"
                  showValueLabel={true}
                  label="Checking..."
                  classNames={{
                    base: "max-w-md",
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-pink-200 to-pink-400",
                    label: "tracking-wider font-medium text-default-600",
                    value: "text-foreground/60 text-center",
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={openFinished} onOpenChange={() => {}} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="text-center">
                <p className="font-semibold text-xl mb-4">
                  Everything is OK now :3
                </p>
                <p>
                  If everything is still not OK, try checking your settings of
                  perception of objective reality.
                </p>
                <Button
                  onPress={() => setOpenFinished(false)}
                  radius="full"
                  className="my-3 bg-pink-300/20 backdrop-blur-sm text-slate-500 text-xl font-bold shadow-md shadow-pink-300 border-2 border-pink-300 active:scale-90 transition duration-150 ease-in-out"
                >
                  Continue
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="fixed w-full h-full">
        <Spline scene="https://prod.spline.design/plZM6Wt5CVnYFcwQ/scene.splinecode" />
      </div>
    </div>
  );
}
