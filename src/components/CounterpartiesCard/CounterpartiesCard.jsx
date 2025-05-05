import workerImage from "../../assets/worker.svg";

export default function CounterpartiesCard() {
  return (
    <>
      <div>
        <img src={workerImage} alt="Фото" width={100} />
        <h2>Jimmy Nilsson</h2>
        <p>123 Main Street, New York, NY</p>
        <div>
          <ul>
            <li>Телефон: +1 234 567 890</li>
          </ul>
        </div>
      </div>
    </>
  );
}
