function ImportantDates() {
    return (
      <div className="pb-40 bg-fourthColor">
        <div className="flex justify-center pt-10" >
          <h1 className="text-4xl font-bold">Important Dates</h1>
        </div>
        <div className="flex justify-center text-center pt-10">
          <table className="table-fixed border-collapse border-spacing-2 border-2 w-[800px] border-slate-600">
            <thead>
              <tr>
                <th className="text-2xl border-2 border-slate-900 py-1">Event</th>
                <th className="text-2xl border-2 border-slate-900 py-1">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xl border-2 border-slate-600 py-2">Last Day for Abstract Submission</td>
                <td className="text-xl border-2 border-slate-600 py-2">31st Jan, 2024</td>
              </tr>
              <tr>
                <td className="text-xl border-2 border-slate-600 py-2">Notification of Acceptance</td>
                <td className="text-xl border-2 border-slate-600 py-2">9th Feb, 2024</td>
              </tr>
              <tr>
                <td className="text-xl border-2 border-slate-600 py-2">Opening of Online Registration</td>
                <td className="text-xl border-2 border-slate-600 py-2">10th Feb, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ImportantDates