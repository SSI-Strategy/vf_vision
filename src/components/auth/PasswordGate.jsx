import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SITE_ACCESS_CODE } from '../../utils/constants';

const PasswordGate = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('vf_vision_auth') === 'true';
    if (isAuthenticated) {
      onAuthenticated();
    }
    setIsLoading(false);
  }, [onAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === SITE_ACCESS_CODE) {
      localStorage.setItem('vf_vision_auth', 'true');
      setError(false);
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-ssi-black">
        <div className="w-8 h-8 border-4 border-ssi-ocean border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ssi-black via-ssi-midnight to-ssi-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-8"
      >
        <div className="bg-ssi-midnight/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-ssi-ocean/20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Velocity Foundry
            </h1>
            <p className="text-ssi-turquoise text-sm">
              Vision Portal
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ssi-sand mb-2">
                Access Code
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 bg-ssi-black/50 border rounded-lg text-white placeholder-ssi-stone/50 focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-ssi-ocean/30 focus:ring-ssi-ocean focus:border-ssi-ocean'
                }`}
                placeholder="Enter access code"
                autoFocus
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  Invalid access code. Please try again.
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-ssi-ocean to-ssi-turquoise text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-ssi-ocean/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Enter
            </button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-6 border-t border-ssi-ocean/20"
          >
            <p className="text-center text-ssi-stone text-xs italic">
              "The best time to achieve velocity was yesterday.<br />
              The second best time is Monday morning."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordGate;
