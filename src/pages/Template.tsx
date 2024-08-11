import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BreakDownIconOne from '@/assets/breakdown-1.svg';
import PricingLite from '@/assets/pricing-lite.svg';
import PricingPro from '@/assets/pricing-pro.svg';
import PricingCheck from '@/assets/pricing-check.svg';
import PagicLogo from '@/assets/pagic-logo.svg';
import HamMenu from '@/assets/ham-menu.svg';
import Dot from '@/assets/Dot.svg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Template = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center py-4 px-[20px] md:px-[32px] h-[80px]">
          <img src={PagicLogo} className="w-[92px] h-[34px]" alt="Pagic Logo" />

          <ul className="mr-auto pl-10 md:flex gap-10 hidden">
            <li className="text-[#525252]">About</li>
            <li className="text-[#525252]">Team</li>
            <li className="text-[#525252]">Pricing</li>
          </ul>

          <div className="gap-3 my-[30px] hidden md:flex">
            <Button className="p-6">Button</Button>
            <Button className="p-6" variant="outline">
              Button
            </Button>
          </div>

          <img className="md:hidden" src={HamMenu} alt="Ham Menu Icon" />
        </nav>
      </header>

      <main>
        <section className="py-7 px-[20px] md:px-[32px] md:flex md:flex-row md:justify-between md:pt-0">
          <div className=" md:my-[auto] md:pr-10">
            <div className="inline-flex gap-2 py-1 px-3  bg-[#F5F5F5] text-[14px] rounded-[999px] mb-2 mr-2">
              <img src={Dot} alt="Dot" /> Optional Tag
            </div>

            <h1 className="scroll-m-20 text-[30px] md:text-[48px] md:leading-[50px] font-semibold leading-[32px] mt-3 mb-6">
              Tell the world about your website.
            </h1>
            <span className=" inline-flex text-[16px] leading-[24px] md:max-w-[90%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              minima nostrum
            </span>
            <div className="flex gap-3 my-[30px]">
              <Button className="p-6">Button</Button>
              <Button className="p-6" variant="outline">
                Button
              </Button>
            </div>
          </div>
          <img
            className="h-[421px] w-full object-cover mt-4 md:mt-0 md:max-w-[50%] md:h-[624px]"
            src="https://s3-alpha-sig.figma.com/img/e7f0/6ed4/e71a3a0dbbffb214512a40eddaa5a45f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMa0W9Ru1Sm1E8kbPhzDHHC8bTP3ueIbGWS3xGRw3nEIwe66AUuQCB-iRayLKbLEqbf8LEVZRJ5IGWZjdrOPArgWdtVGzuQmP313GzQEQ0U9kV88YZ0VZ-9GG2E~AW4QQI97xDVEFXItbIny8BWReYQTMe8aZDEFltTIOU576jkqIpILjIMQb10~xJ9LgN5PGi4ZdG8jXPPfRwjEz~yBlkesmXV-y7BKbOLoW2adGG9Q44Wh92Jj8npEreC0xywwMGERDch4P1g7DtJK7gU2JnYK1AWH3i2sGzicEjwjOTFwoOPeeFByb7X0MLrm5XJLIzAJhBDjKJw4O0aF3IAxvA__"
            alt="Hero Image"
          />
        </section>

        <section className="py-[60px] bg-[#FAFAFA]">
          <CardDescription className="text-[16px] text-center">
            Trusted by
          </CardDescription>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-sm mx-auto "
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="s">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center">
                        <span className="text-3xl font-semibold">54 </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="py-4 px-[20px] md:px-[32px] flex flex-col gap-[30px]">
          <h2 className="font-semibold text-[30px] md:text-[48px]">
            Let's break it down.
          </h2>
          <div className="md:flex justify-between gap-[32px]">
            <Card
              className="border-none  md:w-[auto]"
              style={{
                backgroundColor: 'rgba(250, 250, 250, 1)',
              }}
            >
              <CardHeader className="mb-6">
                <img
                  className="h-[48px] self-start"
                  src={BreakDownIconOne}
                  alt="Logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[20px] font-semibold mb-2">
                  Lorem ipsum
                </CardTitle>
                <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis minima nostrum nihil adipisci architectoed. um, dolor
                  sit amet consectetur adipisicing elit. Omnis minima nostrum
                  nihil adipisci architectoed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-none  md:w-[auto]"
              style={{
                backgroundColor: 'rgba(250, 250, 250, 1)',
              }}
            >
              <CardHeader className="mb-6">
                <img
                  className="h-[48px] self-start"
                  src={BreakDownIconOne}
                  alt="Logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[20px] font-semibold mb-2">
                  Lorem ipsum
                </CardTitle>
                <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis minima nostrum nihil adipisci architectoed. um, dolor
                  sit amet consectetur adipisicing elit. Omnis minima nostrum
                  nihil adipisci architectoed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-none  md:w-[auto]"
              style={{
                backgroundColor: 'rgba(250, 250, 250, 1)',
              }}
            >
              <CardHeader className="mb-6">
                <img
                  className="h-[48px] self-start"
                  src={BreakDownIconOne}
                  alt="Logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[20px] font-semibold mb-2">
                  Lorem ipsum
                </CardTitle>
                <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis minima nostrum nihil adipisci architectoed. um, dolor
                  sit amet consectetur adipisicing elit. Omnis minima nostrum
                  nihil adipisci architectoed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-[20px] md:px-[32px] pt-[96px] pb-[30px] flex flex-col gap-[30px] md:grid grid-cols-[1fr_2fr_2fr_1fr] grid-rows-[1fr_2fr_2fr_2fr]">
          <h2 className="font-semibold text-[30px] md:text-[48px] col-span-2 col-start-2 row-span-1 md:text-center">
            Share the important details
          </h2>

          <Card className="border-none bg-red-200s h-[395px] md:h-[575px] overflow-hidden rounded-[20px] col-start-3 row-start-2 col-span-2 row-span-3">
            <img
              className="h-full w-full object-cover "
              src="https://s3-alpha-sig.figma.com/img/de9a/1f25/affd5a3cb88bd6387ccd82070677fd2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4Eho6inKH7wFYqlgzGoGCYpaKHZskW41UC0X30xwsD2IHUprGAYcWbcxTwz1Ujsw73uLVY0g9PlJzB3XzNSMGVMm4yJXnI0bdNxeObZLWJrPROOurjeNFrMht7FnXIe6gpMYu2bjQevyEeyXI3j5nUMjRh1dXv6eOjHdpzYIHQIkOlsS2aWMcquxdBmneqZTJr-UZ6VW0mEcbkDCgQZAR-dhmOWItTpXvpAhgG93~9C~-pUNWtDe~Skm2nCZg8Al~XoJgBiOZpRkPWYhIMHrn~oHklaLus3OA3~Vu6IlZukxGtrezUUuO8jpriat2c9EqrC6DMnp~RHlitmOmXoWg__"
              alt="Logo"
            />
          </Card>

          <Card className="border-none col-start-1 row-start-2 col-span-2 row-span-1 shadow-none">
            <CardTitle className=" mb-2 text-[20px] font-semibold">
              Lorem impsum
            </CardTitle>
            <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              repudiandae iste, possimus culpa unde, dicta iure laborum ratione
              ipsam nemo pariatur quibusdam maiores voluptates eos vita
            </CardDescription>
          </Card>

          <Card className="border-none col-start-1 row-start-3 col-span-2 row-span-1 shadow-none">
            <CardTitle className=" mb-2 text-[20px] font-semibold">
              Dolor sit amet
            </CardTitle>
            <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              repudiandae iste, possimus culpa unde, dicta iure laborum ratione
              ipsam nemo pariatur quibusdam maiores voluptates eos vita
            </CardDescription>
          </Card>

          <Card className="border-none col-start-1 row-start-4 col-span-2 row-span-1 shadow-none">
            <CardTitle className=" mb-2 text-[20px] font-semibold">
              Nullam et augue
            </CardTitle>
            <CardDescription className="text-[16px] leading-[28px] text-[#525252]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              repudiandae iste, possimus culpa unde, dicta iure laborum ratione
              ipsam nemo pariatur quibusdam maiores voluptates eos vita
            </CardDescription>
          </Card>
        </section>

        <section className="px-[20px] md:px-[32px] py-[96px] flex flex-col ">
          <h2 className="text-center font-semibold text-[30px] md:text-[48px] mb-[64px]">
            Our incredible team
          </h2>
          <div className="grid md:grid-cols-2 gap-[32px]">
            <Card className="border-none rounded-[20px] h-[480px]  sm:w-[360px] overflow-hidden relative md:ml-auto  ">
              <img
                className="h-full w-full object-cover absolute z-0"
                src="https://s3-alpha-sig.figma.com/img/8174/3d8e/ae6ad9d9c8db2398bf685f09d55e326c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXvuBBNWJsIw9yhd0rFveMnb8WgYG-T1A5dAarU6Sg8GzzJHG6UbRcqA9QyCLw0m1lqQQgNpmmq~CD80-8nbcXhEKADw876JfYQZvp7Tu-G1llhip0p6eABfx90HCaMUHSzdoezN9cLNiiKScE8f~NFh39StQKR-3Z3S0Iu9HWDJVo8Y8PLKoeAnmTe5VsiBbszLurV6aOwPZZsScg4xyFSnpO2tMDMdWb8oWl7HqDtALsAfG4ZOfRmavlmqmyM1wgl32fkIPwzgIBPnLBDe1MODotPYJKVoQZHvnux2Lzeno6NYTfKZ-lGk9A5VeXu6vnZG-2fJe-t3Qkd-WrdA5g__"
                alt="Logo"
              />
              <CardFooter className="flex flex-col absolute bottom-8 left-[50%] translate-x-[-50%] z-1 w-[85%] rounded-[10px] backdrop-blur-lg py-[24px] px-[20px] ">
                <CardDescription className="self-start font-bold text-[24px] text-white mb-[12px]">
                  Leslie Smith
                </CardDescription>
                <CardDescription className="self-start  text-[20px] text-white mb-[12px]">
                  Founder
                </CardDescription>
                <CardDescription className="self-start  text-[16px] text-white ">
                  Company Name
                </CardDescription>
              </CardFooter>
            </Card>
            <Card className="border-none rounded-[20px] h-[480px] sm:max-w-[360px] overflow-hidden relative ">
              <img
                className="h-full w-full object-cover absolute z-0"
                src="https://s3-alpha-sig.figma.com/img/8174/3d8e/ae6ad9d9c8db2398bf685f09d55e326c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXvuBBNWJsIw9yhd0rFveMnb8WgYG-T1A5dAarU6Sg8GzzJHG6UbRcqA9QyCLw0m1lqQQgNpmmq~CD80-8nbcXhEKADw876JfYQZvp7Tu-G1llhip0p6eABfx90HCaMUHSzdoezN9cLNiiKScE8f~NFh39StQKR-3Z3S0Iu9HWDJVo8Y8PLKoeAnmTe5VsiBbszLurV6aOwPZZsScg4xyFSnpO2tMDMdWb8oWl7HqDtALsAfG4ZOfRmavlmqmyM1wgl32fkIPwzgIBPnLBDe1MODotPYJKVoQZHvnux2Lzeno6NYTfKZ-lGk9A5VeXu6vnZG-2fJe-t3Qkd-WrdA5g__"
                alt="Logo"
              />
              <CardFooter className="flex flex-col absolute bottom-8 left-[50%] translate-x-[-50%] z-1 w-[85%] rounded-[10px] backdrop-blur-lg py-[24px] px-[20px] ">
                <CardDescription className="self-start font-bold text-[24px] text-white mb-[12px]">
                  Leslie Smith
                </CardDescription>
                <CardDescription className="self-start  text-[20px] text-white mb-[12px]">
                  Founder
                </CardDescription>
                <CardDescription className="self-start  text-[16px] text-white ">
                  Company Name
                </CardDescription>
              </CardFooter>
            </Card>
            <Card className="border-none rounded-[20px] h-[480px] sm:w-[360px] overflow-hidden relative  md:ml-auto">
              <img
                className="h-full w-full object-cover absolute z-0"
                src="https://s3-alpha-sig.figma.com/img/8174/3d8e/ae6ad9d9c8db2398bf685f09d55e326c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXvuBBNWJsIw9yhd0rFveMnb8WgYG-T1A5dAarU6Sg8GzzJHG6UbRcqA9QyCLw0m1lqQQgNpmmq~CD80-8nbcXhEKADw876JfYQZvp7Tu-G1llhip0p6eABfx90HCaMUHSzdoezN9cLNiiKScE8f~NFh39StQKR-3Z3S0Iu9HWDJVo8Y8PLKoeAnmTe5VsiBbszLurV6aOwPZZsScg4xyFSnpO2tMDMdWb8oWl7HqDtALsAfG4ZOfRmavlmqmyM1wgl32fkIPwzgIBPnLBDe1MODotPYJKVoQZHvnux2Lzeno6NYTfKZ-lGk9A5VeXu6vnZG-2fJe-t3Qkd-WrdA5g__"
                alt="Logo"
              />
              <CardFooter className="flex flex-col absolute bottom-8 left-[50%] translate-x-[-50%] z-1 w-[85%] rounded-[10px] backdrop-blur-lg py-[24px] px-[20px] ">
                <CardDescription className="self-start font-bold text-[24px] text-white mb-[12px]">
                  Leslie Smith
                </CardDescription>
                <CardDescription className="self-start  text-[20px] text-white mb-[12px]">
                  Founder
                </CardDescription>
                <CardDescription className="self-start  text-[16px] text-white ">
                  Company Name
                </CardDescription>
              </CardFooter>
            </Card>
            <Card className="border-none rounded-[20px] h-[480px] sm:max-w-[360px] overflow-hidden relative ">
              <img
                className="h-full w-full object-cover absolute z-0"
                src="https://s3-alpha-sig.figma.com/img/8174/3d8e/ae6ad9d9c8db2398bf685f09d55e326c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXvuBBNWJsIw9yhd0rFveMnb8WgYG-T1A5dAarU6Sg8GzzJHG6UbRcqA9QyCLw0m1lqQQgNpmmq~CD80-8nbcXhEKADw876JfYQZvp7Tu-G1llhip0p6eABfx90HCaMUHSzdoezN9cLNiiKScE8f~NFh39StQKR-3Z3S0Iu9HWDJVo8Y8PLKoeAnmTe5VsiBbszLurV6aOwPZZsScg4xyFSnpO2tMDMdWb8oWl7HqDtALsAfG4ZOfRmavlmqmyM1wgl32fkIPwzgIBPnLBDe1MODotPYJKVoQZHvnux2Lzeno6NYTfKZ-lGk9A5VeXu6vnZG-2fJe-t3Qkd-WrdA5g__"
                alt="Logo"
              />
              <CardFooter className="flex flex-col absolute bottom-8 left-[50%] translate-x-[-50%] z-1 w-[85%] rounded-[10px] backdrop-blur-lg py-[24px] px-[20px] ">
                <CardDescription className="self-start font-bold text-[24px] text-white mb-[12px]">
                  Leslie Smith
                </CardDescription>
                <CardDescription className="self-start  text-[20px] text-white mb-[12px]">
                  Founder
                </CardDescription>
                <CardDescription className="self-start  text-[16px] text-white ">
                  Company Name
                </CardDescription>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="px-[20px] md:px-[32px] py-[96px] flex flex-col gap-[32px]">
          <h2 className="text-center font-semibold text-[30px] md:text-[48px] mb-[64px]">
            A look into my world.
          </h2>

          <div className="flex flex-col gap-[32px] md:flex-row flex-wrap justify-between ">
            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%]  ">
              <img
                className="h-full w-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/f2c4/4093/44b0bb39c32c1661624030470aa25abf?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XISPZX-rXsNkOsJpi4R~H3etYVue5u84e05EJ1c6lqiOp-2Y86s1PpDtA5hganqN6UrFOxy-X2XmbE00-dhljmmE3VBuMVCcRWy47UT51ycvjYcyVBdGz6kLhwskWUkpP7J0aJRnnpDfFYJ~xAuKP1xwPeYxFK6LoEF~eiD5-7soYC6Jgad4cEv72VVwco0O2zQS7J86sSlpMOMZYptyLikg5zUpzpVvtk4~C7hz096mKUvcdRXHwzq08-XQdVWGHdf67-dWgarHU5dVxKH4BUKrsnmfjr5Tj7Ao4lb8Qqt4ridqg9i5Fd5ALTMKe64xvZB8gKqaHSxNkAzXdlnOfw__"
                alt="Logo"
              />
            </Card>
            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%] ">
              <img
                className="h-full w-full object-cover "
                src="https://s3-alpha-sig.figma.com/img/e7f0/6ed4/e71a3a0dbbffb214512a40eddaa5a45f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMa0W9Ru1Sm1E8kbPhzDHHC8bTP3ueIbGWS3xGRw3nEIwe66AUuQCB-iRayLKbLEqbf8LEVZRJ5IGWZjdrOPArgWdtVGzuQmP313GzQEQ0U9kV88YZ0VZ-9GG2E~AW4QQI97xDVEFXItbIny8BWReYQTMe8aZDEFltTIOU576jkqIpILjIMQb10~xJ9LgN5PGi4ZdG8jXPPfRwjEz~yBlkesmXV-y7BKbOLoW2adGG9Q44Wh92Jj8npEreC0xywwMGERDch4P1g7DtJK7gU2JnYK1AWH3i2sGzicEjwjOTFwoOPeeFByb7X0MLrm5XJLIzAJhBDjKJw4O0aF3IAxvA__"
                alt="Logo"
              />
            </Card>

            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%] ">
              <img
                className="h-full w-full object-cover "
                src="https://s3-alpha-sig.figma.com/img/05a1/f6f4/1558428d6941738d4c1b4c782792591c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~THSZlhqf6HWvx5ZZUTkTcAQCedWCo3PDwSxBXv1B~KfIqWJRpdcYMipAuON~41Nq~uN9O6zMVtMKfiAVePlgKqWjydGowps5w6o~ArPQZ4zkYGzCiQx8aEV2zu2WncHZHbhLErHorZN5ZwnFKlWMW82pum1AGUaGKvr668kqk2g7-V~FSwizTEFmWc6vTfGdcTEpusbIru0Ijok2ulNp8U5JU7NJLpzEGzmGKYc9ZMr4TpDrJpU-PYvY5D3~QBHoScLzRLPVDOsjJjbRvQNSGPNXgOLNEINtbmtgGfbm0jyOnDgK6lUMQHE0PK6f6NIwF3Lu44FDYdZxh7AaofDQ__"
                alt="Logo"
              />
            </Card>
            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%] ">
              <img
                className="h-full w-full object-cover "
                src="https://s3-alpha-sig.figma.com/img/08f5/54e6/b434cc063bf0c5eabf05d1e5c53727ca?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVajZpEF6bBbwanHJ0AzW21scwY7tDvufOqJfJ3~seHkfMJqMyxd-UlrOH~6Fk6-8m4Otqp5i0UbSzHjGtPsGDkEZ1bWB~XhDVf9rJomzxNxX1~zdvf4-PofqpIF~sltE8pkivKWvD9Zg32QaIoH5ZNV1MuM9fcDvSa9TuoNaPX-yZI4Qegxu2JF9wOdPiAy~31b-pykVpN8ccmCuXAc~96iYLW24ActDpLB2YPg91Nht0zyMu5mdVUlu9X1xcrJ2iLBtQabuE5eZD6slfkb5ge71DNZeEfyNRrx1Pj4tfRXrdJvatx-n7FXdwicB4TOyaHO-biph2d2x3-UCvffJg__"
                alt="Logo"
              />
            </Card>
            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%] ">
              <img
                className="h-full w-full object-cover "
                src="https://s3-alpha-sig.figma.com/img/de9a/1f25/affd5a3cb88bd6387ccd82070677fd2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4Eho6inKH7wFYqlgzGoGCYpaKHZskW41UC0X30xwsD2IHUprGAYcWbcxTwz1Ujsw73uLVY0g9PlJzB3XzNSMGVMm4yJXnI0bdNxeObZLWJrPROOurjeNFrMht7FnXIe6gpMYu2bjQevyEeyXI3j5nUMjRh1dXv6eOjHdpzYIHQIkOlsS2aWMcquxdBmneqZTJr-UZ6VW0mEcbkDCgQZAR-dhmOWItTpXvpAhgG93~9C~-pUNWtDe~Skm2nCZg8Al~XoJgBiOZpRkPWYhIMHrn~oHklaLus3OA3~Vu6IlZukxGtrezUUuO8jpriat2c9EqrC6DMnp~RHlitmOmXoWg__"
                alt="Logo"
              />
            </Card>
            <Card className="border-none h-[353px] overflow-hidden rounded-[20px] md:h-[475px] md:w-[48%] ">
              <img
                className="h-full w-full object-cover "
                src="https://s3-alpha-sig.figma.com/img/7bf0/67f2/abf14626db65aef877bddf1fcbfe41e9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHrj3ZTF51uHIW7y94HRGO2F-j-IaOqEAShdg5tRWQNzDxpS0qe3S0DPRwM7hoF~zknU9NtGC93EyiC1yRJ7tYjsRSS7n6FFSOYUREAJGcd0l02KzNGotonCFPvlXeHANFOYS6zIUWs1XNV6G9dW2F9TFOJCntJkLU50Ji~XvqrTNAQUFX~9eYGsl5IbIKRY7aI5UzIjpF3UCUsXamQuTEpjoYG-eK0NQyBsWzYgbYdtCptMNB3-fR2cz2jjLQvTX1wIj-9ywNHzUBiPxm7cGSk2RT~s2R85eIFwo95Tq088wJ-aC90Mf5AVjfd8~2DxOvzNEMqMj4u5POMaIKnBbw__"
                alt="Logo"
              />
            </Card>
          </div>
        </section>

        <section className="p-[20px] md:px-[32px] py-[96px] flex flex-col bg-[#FAFAFA]">
          <h2 className="text-center font-semibold text-[30px] md:text-[48px] mb-[64px]">
            Pricing that scales.
          </h2>
          <div className="flex flex-col md:flex-row gap-[32px]">
            <Card className=" overflow-hidden mb-[32px] shadow-lg border-none md:w-[50%]">
              <CardHeader className="pb-0">
                <img
                  className="h-[48px] w-[48px] self-start"
                  src={PricingLite}
                  alt="Logo"
                />
                <CardDescription className="text-[20px] text-black font-semibold ">
                  Lite
                </CardDescription>
              </CardHeader>
              <CardContent className="mb-8">
                <CardTitle className="text-[48px] font-semibold mb-2">
                  $49/mo
                </CardTitle>
                <CardDescription className="text-[16px] flex gap-2 mb-3 mt-5">
                  <img src={PricingCheck} alt="check" />
                  Partial Access
                </CardDescription>
                <CardDescription className="text-[16px] flex gap-2 mb-5">
                  <img src={PricingCheck} alt="check" />
                  24/7 Customer Support
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-[50px] text-[16px]">Button</Button>
              </CardFooter>
            </Card>

            <Card className=" overflow-hidden mb-[32px] shadow-lg border-none md:w-[50%]">
              <CardHeader className="pb-0">
                <img
                  className="h-[48px] w-[48px] self-start"
                  src={PricingPro}
                  alt="Logo"
                />
                <CardDescription className="text-[20px] text-black font-semibold ">
                  Pro
                </CardDescription>
              </CardHeader>
              <CardContent className="mb-8">
                <CardTitle className="text-[48px] font-semibold mb-2">
                  $99/mo{' '}
                </CardTitle>
                <CardDescription className="text-[16px] flex gap-2 mb-3 mt-5">
                  <img src={PricingCheck} alt="check" />
                  Full Access
                </CardDescription>
                <CardDescription className="text-[16px] flex gap-2 mb-5">
                  <img src={PricingCheck} alt="check" />
                  24/7 Customer Support
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-[50px] text-[16px]">Button</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-[#F5F5F5] flex flex-col items-center pt-[48px] pb-[48px]">
        <img className="mb-6" src={PagicLogo} alt="ImageLogo" />
        <span className="text-[16px]">2024 © Your Website Name</span>
      </footer>
    </>
  );
};

export default Template;
