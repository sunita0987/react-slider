
//  export default function StepsCard({ step }) {
const StepsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 h-full bg-white">
      {step.image && (
        <img src={step.image} alt={step.title} className="w-full h-48 object-cover mb-4" />
      )}
      <h2 className="text-lg font-semibold text-gray-800">
        {step.id}. {step.title}
      </h2>
      {step.description && (
        <p className="text-sm text-gray-600 mt-2">{step.description}</p>
      )}
    </div>
  );
}
export default StepsCard;


