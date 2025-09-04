import GuaranteeCard from "./GuaranteeCard";

function Guarantees() {
  const data = [
    {
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in our products.",
      status: 'in progress',
      statusPercentage: 75
    },
    {
      title: "Customer Support",
      description: "Our support team is available 24/7 to assist you.",
      status: 'in progress',
      statusPercentage: 45
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 60
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'in progress',
      statusPercentage: 60
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 60
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'yet to start',
     statusPercentage: 0
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 100
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'yet to start',
      statusPercentage: 0
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 100
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'yet to start',
      statusPercentage: 0
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 100
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'yet to start',
      statusPercentage: 0
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'completed',
      statusPercentage: 100
    },
    {
      title: "Cleaning",
      description: "If you're not satisfied, we offer a full refund.",
      status: 'yet to start',
      statusPercentage: 0
    },
  ];
  return (
    <div className="flex justify-center bg-yellow-300/10">
    <div className="grid grid-auto-fit items-stretch gap-4 justify-center p-4 w-[1200px]">
      {data.map((item, index) => (
        <div key={index}>
          <GuaranteeCard item={item} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Guarantees;
