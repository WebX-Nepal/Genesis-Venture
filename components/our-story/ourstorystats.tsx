import Counter from "../ui/Counter";

const stats = [
  { value: "20+", label: "Years of cross-sector experience", color: "#001D3F", animate: false },
  { value: "2", label: "Sectors of deep expertise", color: "#04356A", animate: false },
  { value: "Global", label: "Investment perspective and reach", color: "#054E98", animate: false },
  { value: "All", label: "Investor types served", color: "#0A6ED3", animate: false },
];

export default function storyStats() {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-2 sm:grid-cols-4">
        {stats.map(({ value, label, color ,animate}) => (
          <div
            key={label}
            className="flex min-h-45 flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:min-h-55 sm:px-6 md:px-8"
            style={{ backgroundColor: color }}
          >
            {animate === false ? (
              <span className="whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white">
                {value.includes("+") ? (
                  <>
                    <span className="font-agatho">{value.replace("+", "")}</span>
                    <span className="font-montserrat">+</span>
                  </>
                ) : (
                  <span className="font-agatho">{value}</span>
                )}
              </span>
            ) : (
              <Counter to={value} />
            )}
         
            
            <span className="text-xs text-white uppercase tracking-widest font-montserrat leading-tight">
              {label}
            </span>
            
          </div>
        ))}
      </div>
    </section>
  );
}
