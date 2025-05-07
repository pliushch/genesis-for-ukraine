import { useEffect, useState } from 'react';
import useServices from 'src/hooks/useServices';

const useTotalIncome = () => {
  const { rokitService } = useServices()
  const [totalIncome, setTotalIncome] = useState<number>()

  const makeRequest = async () => {
    try {
      const report = await rokitService.getReport()
      setTotalIncome(report.getTotalIncome())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    void makeRequest()
    const poll = setInterval(makeRequest, 60000)
    return () => clearInterval(poll)
  }, [])

  return { totalIncome }
};

export default useTotalIncome;
