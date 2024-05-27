import Reports from './Reports';

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit max-w-5xl p-4 flex flex-col gap-4 pb-12">
        <p className="text-dwd-primary font-bold text-4xl text-center mb-2 mt-2">
          Annual Reports
        </p>
        <Reports />
      </div>
    </div>
  );
}
