interface CoreValuesProps {
  coreValues: {
    text: string;
    id: string;
  }[];
}
const CoreValues = ({ coreValues }: CoreValuesProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4 items-center min-h-52 bg-dwd-secondary2/40 w-full">
            <span className="text-center text-2xl sm:text-3xl md:text-4xl text-dwd-primary font-bold">
        Core Values
            </span>
            <ul>
                {coreValues?.map((value) => (
                    <li key={value.id} className="md:text-lg">
            &#9679;{' ' + value.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoreValues;
