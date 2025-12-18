import { Button, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Subscribe = () => {
    const matches = useMediaQuery('(max-width: 639px)');
    const matches1 = useMediaQuery('(max-width: 475px)');
    return <div data-aos="zoom-out" className="mt-20  flex items-center bg-mine-shaft-900 mx-20 sm-mx:mx-5  py-3 rounded-xl justify-around flex-wrap">
        <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl w-2/5 bs-mx:w-4/5 text-center font-semibold text-mine-shaft-100">Keep up with the latest<span className="text-bright-sun-400"> —Subscribe today!</span></div>
        <div className="flex gap-4 rounded-xl xs-mx:flex-col  bg-mine-shaft-700 px-3 py-2 xs:items-center">
            <TextInput
                className=" [&_input]:text-mine-shaft-100 font-semibold"
                variant="unstyled"
                placeholder="Your@email.com"
                size={matches1?"sm":matches?"md":"xl"}
            />
<div
  className="
    inline-block
    p-[4px]                
    rounded-xl
    bg-gradient-to-r
    from-red-500
    via-yellow-400
    via-green-400
    via-blue-500
    to-purple-500
    bg-[length:300%_300%]
    animate-rainbow-border
  "
>
  <Button
  size={matches1 ? "sm" : matches ? "md" : "xl"}
  variant="default"   
  className="
    !rounded-xl
    bg-green-500
    text-black
    font-semibold
    transition-all duration-300
    hover:bg-indigo-500
    hover:shadow-[0_0_30px_rgba(99,102,241,0.7)]
    hover:-translate-y-[1px]
  "
>
  Subscribe
</Button>
</div>

        </div>
    </div>
}
export default Subscribe;