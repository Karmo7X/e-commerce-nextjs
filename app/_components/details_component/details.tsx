export default function Details() {
  return (
    <>
     <div>
                  <h2 className="text-2xl font-bold">Product Details</h2>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: 'Material', value: '100% Organic Cotton' },
                      { label: 'Weight', value: '180 GSM' },
                      { label: 'Fit', value: 'Regular Fit' },
                      { label: 'Made in', value: 'Portugal' },
                      { label: 'SKU', value: 'PCT-001-BLK' }
                    ].map((detail) => (
                      <div key={detail.label} className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">{detail.label}</span>
                        <span className="font-medium text-gray-900">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Size Guide</h2>
                  <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full min-h-[270px] divide-y divide-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Size</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Chest</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Length</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Sleeve</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { size: 'S', chest: '36"', length: '28"', sleeve: '8"' },
                          { size: 'M', chest: '38"', length: '29"', sleeve: '8.5"' },
                          { size: 'L', chest: '40"', length: '30"', sleeve: '9"' },
                          { size: 'XL', chest: '42"', length: '31"', sleeve: '9.5"' }
                        ].map((row) => (
                          <tr key={row.size} className="bg-white">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.size}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{row.chest}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{row.length}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{row.sleeve}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
    </>
  );
}

