export const MediaQueryDebug = () => {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-0.5 left-0.5 z-50">
      <div className="flex w-6 items-center justify-center bg-background px-2 font-mono text-[10px] opacity-50">
        <div className="block sm:hidden">XS</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          SM
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">MD</div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">LG</div>
        <div className="hidden xl:block 2xl:hidden">XL</div>
        <div className="hidden 2xl:block">2XL</div>
      </div>
    </div>
  )
}
